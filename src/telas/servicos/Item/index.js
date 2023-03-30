import React, {useState} from "react";
import {Button, Text, TextInput, View} from 'react-native';
import CampoInteiro from "../../../componentes/campointeiro";

export default function Item({nome, preco, descricao}){
    const [quantidade, setQuantidade] = useState(1)
    return <>
    <View style={estilos.informacao}>
        <Text style={estilos.nome}>{ nome}</Text>
        <Text style={estilos.descricao}>{ descricao}</Text>
        <Text style={estilos.preco}>{ preco}</Text>
    </View>
    <View style={estilos.carrinho}>
        <View>
            <View style={estilos.valor}>
                <Text style={estilos.descricao}>quantidade:</Text>
                <CampoInteiro estilos={estilos.quantidade} valor={quantidade} acao={setQuantidade}/>
            </View>
            <View style={estilos.valor}>
                <Text style={estilos.descricao}>Preço:</Text>
                <Text style={estilos.preco}>0</Text>
            </View>
        </View>
        <Button title="adicionar" />
    </View>
<View style={estilos.divisor}/>
    </>
}