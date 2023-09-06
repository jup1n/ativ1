import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { Itens } from "../../components/Participants";
import { styles } from "./styles";

export default function Home() {
    const [itens, setItens] = useState<String[]>([])
    const [itensName, setItensName] = useState('')

    function handleItensAdd(){
        if (itensName.trim().length > 0){
            if (itens.includes(itensName)){
                setItensName('')
                return Alert.alert("Alerta!","Item já existe.")
            }
            setItens([...itens, itensName.trimStart()])
            setItensName('')
        } else {
            return Alert.alert("Alerta!","O nome está vazio.")
        }
    }

    function handleItensRemove(itens: String) {
        Alert.alert('Remover', `Deseja remover o item ${itens}`,
            [
                {   
                    text: 'Sim',
                    onPress: () => setItens(prevState => prevState.filter(partic => partic != itens))
                },
                {
                    text: 'Não',
                    style: 'cancel'
                }
            ])
    }

    return (
        <View style={styles.home}>
            <Text style={styles.title}>Lista de compras</Text>
            <Text style={styles.subTitle}>Sexta, 26 de agosto de 2023</Text>
            <View style={styles.conteiner}>
                <TextInput style={styles.input}
                    placeholder="Nome do produto"
                    placeholderTextColor={'#ffffff'}
                    onChangeText={setItensName}
                    value={itensName}
                    />
                <TouchableOpacity   style={styles.button}
                                    onPress={handleItensAdd}>
                    <Text style={styles.textButton}>Adicionar</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>Produtos</Text>
            <FlatList
                data={itens}
                keyExtractor={item => item}
                renderItem={({item, index}) => (
                    <Itens 
                        key={index} 
                        item = {item} 
                        onRemove={() => handleItensRemove(item)}
                        />
                )}
                ListEmptyComponent={() => <Text style={styles.text}>Não existe produto na sua lista de compra</Text>}
                showsVerticalScrollIndicator={false} />
        </View>
    )
}