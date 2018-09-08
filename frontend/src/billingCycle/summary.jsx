import React, {Component} from 'react'

import Grid from '../layout/grid'
import Row from '../layout/row'
import ValueBox from '../common/widget/valueBox'

export default ({credit, debt}) => (
    <Grid cols='12'>
        <fieldset>
            <legend>Resumo</legend>
            <Row>
                <ValueBox cols='12 4' color='green' icon='bank'
                        value={`R$ ${credit}`} text='Total de Entrada'/>
                <ValueBox cols='12 4' color='red' icon='credit-card'
                        value={`R$ ${debt}`} text='Total de Saída'/>
                <ValueBox cols='12 4' color='blue' icon='bank'
                        value={`R$ ${credit-debt}`} text='Valor Final'/>
            </Row>
        </fieldset>
    </Grid>
)
