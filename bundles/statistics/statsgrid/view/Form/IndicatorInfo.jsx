import React from 'react';
import { TextInput, TextAreaInput } from 'oskari-ui';
import styled from 'styled-components';
import { BUNDLE_KEY } from '../../constants';

const Content = styled('div')`
    display: flex;
    flex-direction: column;
`;

const StyledInput = styled(TextInput)`
    margin-bottom: 10px;
`;
const StyledTextArea = styled(TextAreaInput)`
    margin-bottom: 10px;
`;

export const IndicatorInfo = ({ state, controller }) => {
    const { name = '', description = '', source = '' } = state.indicator;
    return (
        <Content>
            <StyledInput
                placeholder={Oskari.getMsg(BUNDLE_KEY, 'userIndicators.panelGeneric.formName')}
                value={name}
                onChange={(e) => controller.updateIndicator('name', e.target.value)}
            />
            <StyledTextArea
                placeholder={Oskari.getMsg(BUNDLE_KEY, 'userIndicators.panelGeneric.formDescription')}
                rows={2}
                value={description}
                onChange={(e) => controller.updateIndicator('description', e.target.value)}
            />
            <StyledInput
                placeholder={Oskari.getMsg(BUNDLE_KEY, 'userIndicators.panelGeneric.formDatasource')}
                value={source}
                onChange={(e) => controller.updateIndicator('source', e.target.value)}
            />
        </Content>
    );
};
