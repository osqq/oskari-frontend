import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Message, Select, Option, Space, Button } from 'oskari-ui';
import { Modal } from 'oskari-ui/components/Modal';
import { FeatureFilter, cleanFilter } from 'oskari-ui/components/FeatureFilter';
import { Controller, Messaging } from 'oskari-ui/util';
import { PropertiesFilter, PropertiesLocale, PropertiesFormat } from './VectorLayerAttributes/';
import { StyledFormField } from '../styled';
import { InfoTooltip } from '../InfoTooltip';
import { GEOMETRY_TYPES, getGeometryType } from '../../LayerHelper';

// Clean empty objects and values that doesn't need to store
// format: false options
// locale: empty strings
const clean = obj => {
    for (const key in obj) {
        const val = obj[key];
        if(typeof val === "object" && !Array.isArray(val) && val !== null) {
            if (!Object.keys(val).length) {
                delete obj[key];
            } else {
                clean(val);
            }
        } else if (typeof val === 'string' && !val.trim().length) {
            delete obj[key];
        } else if (val === null || val === false) {
            delete obj[key];
        }
    }
};

export const VectorLayerAttributes = ({ layer, controller }) => {
    const { data = {} } = layer.attributes;
    const { geomName, featureProperties = []} = layer.capabilities;
    const [modal, setModal] = useState(null);
    const [state, setState] = useState({
        filter: data.filter || {},
        locale: data.locale || {},
        format: data.format || {},
        featureFilter: layer.attributes.filter || {}
    });

    const onGeometryTypeChange = value => {
        if (GEOMETRY_TYPES[0] === value) {
            controller.setAttributesData('geometryType');
        } else {
            controller.setAttributesData('geometryType', value);
        }
    };
    const onModalOk = () => {
        if (modal === 'featureFilter') {
            const filter = cleanFilter(state.featureFilter, featureProperties);
            controller.setFeatureFilter(filter);
            setModal(null);
            return;
        }
        // deep clone to not mess local state
        const value = JSON.parse(JSON.stringify(state[modal]));
        // clean twice to get rid of empty objects if last value is deleted from it
        clean(value);
        clean(value);
        if (Object.keys(value).length) {
            controller.setAttributesData(modal, value);
        } else {
            controller.setAttributesData(modal);
        }
        // update local state
        onModalUpdate(value);
        setModal(null);
    };
    const onButtonClick = mode => {
        if (!featureProperties.length) {
            Messaging.warn(<Message messageKey='messages.noFeatureProperties' bundleKey='admin-layereditor'/>);
            return;
        }
        setModal(mode);
    };
    const onModalUpdate = (value) => {
        setState({ ...state, [modal]: value });
    };
    const properties = featureProperties.filter(prop => prop.name !== geomName);
    const propNames = properties.map(prop => prop.name);
    const geometryTypeSource = data.geometryType ? 'Attributes' : 'Capabilities';
    const propLabels = Oskari.getLocalized(data.locale) || {};
    // gather selected properties from all (localized) filters
    const selectedProperties = [...new Set([].concat(...Object.values(state.filter)))];
    return (
        <Fragment>
            <Message messageKey='attributes.geometryType.label'/>
            <InfoTooltip messageKeys={`attributes.geometryType.source${geometryTypeSource}`}/>
            <StyledFormField>
                <Select
                    value={getGeometryType(layer)}
                    onChange={onGeometryTypeChange}>
                    { GEOMETRY_TYPES.map(type => (
                        <Option key={type} value={type}>
                            <Message messageKey={`attributes.geometryType.${type}`} />
                        </Option>
                    )) }
                </Select>
            </StyledFormField>
            <StyledFormField>
                <Button onClick={() => onButtonClick('featureFilter')}>
                    <Message messageKey={`attributes.featureFilter.button`} />
                </Button>
            </StyledFormField>
            <Message messageKey='attributes.properties' />
            <StyledFormField>
                <Space direction='horizontal'>
                    <Button onClick={() => onButtonClick('filter')}>
                        <Message messageKey='attributes.filter.button' />
                    </Button>
                    <Button onClick={() => onButtonClick('locale')}>
                        <Message messageKey='attributes.locale.button' />
                    </Button>
                    <Button onClick={() => onButtonClick('format')}>
                        <Message messageKey='attributes.format.button' />
                    </Button>
                </Space>
            </StyledFormField>
            <Modal
                mask={ false }
                maskClosable= { false }
                open={ !!modal }
                onOk={ () => onModalOk() }
                onCancel={ () => setModal(null) }
                cancelText={ <Message messageKey="cancel" /> }
                okText={ <Message messageKey="save" /> }
                width={ modal === 'featureFilter' ? 800 : 500 }
            >
                <h3><Message messageKey={`attributes.${modal}.title`} /></h3>
                { modal === 'filter' &&
                    <PropertiesFilter update={onModalUpdate} properties={propNames}
                        filter={state.filter} labels={propLabels}/>
                }
                { modal === 'locale' &&
                    <PropertiesLocale update={onModalUpdate} locale={state.locale}
                        properties={propNames} selected={selectedProperties}/>
                }
                { modal === 'format' &&
                    <PropertiesFormat update={onModalUpdate} properties={propNames}
                        format={state.format} labels={propLabels} selected={selectedProperties}/>
                }
                { modal === 'featureFilter' &&
                    <FeatureFilter onChange={onModalUpdate} properties={propNames}
                        filter={state.featureFilter} labels={propLabels} types={properties}/>
                }
            </Modal>
        </Fragment>
    );
};

VectorLayerAttributes.propTypes = {
    layer: PropTypes.object.isRequired,
    controller: PropTypes.instanceOf(Controller).isRequired
};
