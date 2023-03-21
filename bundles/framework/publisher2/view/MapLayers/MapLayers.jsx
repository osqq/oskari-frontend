import React from 'react';
import styled from 'styled-components';
import { Button, Message, Tooltip, Card } from 'oskari-ui';
import { ButtonContainer, IconButton } from 'oskari-ui/components/buttons';
import { UpCircleOutlined, DownCircleOutlined } from '@ant-design/icons';

const Content = styled('div')`
    display: flex;
    flex-direction: column;
    margin-right: 10px;
`;

const LayerBox = styled('div')`
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-height: 32px;
    background-color: ${props => props.disabled ? '#999999' : '#ffffff'};
    opacity: ${props => props.disabled ? '0.5' : '1'};
    padding: 3px 10px 3px 5px;
    margin-top: 5px;
    box-shadow: ${props => props.disabled ? 'none' : '1px 1px 2px rgb(0 0 0 / 60%)'};
`;

const LayerTitle = styled('span')`
    margin-right: 5px;
`;

const LayerContainer = styled('div')`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`;

const ToolsContainer = styled('div')`
    display: flex;
    flex-direction: column;
`;

export const MapLayers = ({ state, controller }) => {
    const layerListTool = state.layerTools.find(tool => tool.handler.getName() === 'MapLayerListHandler');
    const layerListPluginSelected = layerListTool && layerListTool.tool.isEnabled();

    let layers = state.layers;
    let baseLayers = [];
    let listController = null;
    if (layerListPluginSelected) {
        listController = layerListTool.handler.getController();
        const listState = layerListTool.handler.getState() || {};
        baseLayers = listState.baseLayers || [];
        layers = layers.filter(l => !baseLayers.some(bl => bl.getId() === l.getId()));
    }

    return (
        <Content>
            <Card size='small' title={<Message messageKey='BasicView.maptools.label' />}>
                <ToolsContainer>
                    {state.layerTools.map((tool, index) => {
                        return (
                            <tool.component
                                key={index}
                                state={tool.handler.getState()}
                                controller={tool.handler.getController()}
                            />
                        )
                    })}
                </ToolsContainer>
            </Card>
            {layerListPluginSelected && (
                <LayerContainer>
                    <h3><Message messageKey='BasicView.mapLayers.baseLayers' /></h3>
                    {baseLayers.reverse().map((layer, index) => {
                        const disabled = !layer.isVisible();
                        return (
                            <LayerBox key={index} disabled={disabled}>
                                <LayerTitle>{layer.getName()}</LayerTitle>
                                {!disabled && (
                                    <IconButton
                                        icon={<DownCircleOutlined />}
                                        onClick={() => listController.removeBaseLayer(layer)}
                                    />
                                )}
                            </LayerBox>
                        )
                    })}
                </LayerContainer>
            )}
            {layerListPluginSelected && baseLayers?.length < 1 && (
                <Message messageKey='BasicView.mapLayers.noBaseLayers' />
            )}
            <LayerContainer>
                <h3><Message messageKey='BasicView.mapLayers.label' /></h3>
                {layers.map((layer, index) => {
                    const disabled = !layer.isVisible();
                    return (
                        <LayerBox key={index} disabled={disabled}>
                            <LayerTitle>{layer.getName()}</LayerTitle>
                            {!disabled && layerListPluginSelected && (
                                <Tooltip getPopupContainer={(triggerNode) => triggerNode.parentElement} title={<Message messageKey='BasicView.maptools.layerselection.selectAsBaselayer' />}>
                                    <IconButton
                                        icon={<UpCircleOutlined />}
                                        onClick={() => listController.addBaseLayer(layer)}
                                    />
                                </Tooltip>
                            )}
                        </LayerBox>
                    )
                })}
            </LayerContainer>
            {layers?.length < 1 && (
                <Message messageKey='BasicView.mapLayers.noLayers' />
            )}
            <ButtonContainer>
                <Button onClick={() => controller.openSelectedLayerList()}>
                    <Message messageKey='BasicView.mapLayers.layersDisplay' />
                </Button>
                <Button onClick={() => controller.openLayerList()}>
                    <Message messageKey='BasicView.mapLayers.selectLayers' />
                </Button>
            </ButtonContainer>
        </Content>
    );
};
