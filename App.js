import { StyleSheet, Text, View, TextInput, Button, Image, _Image } from 'react-native';
import React, { useState } from 'react';
import FNLogo from '/home/rodolfo/parcial1/nfl.png';

export default function App() {
  const [id, setId] = useState('');
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [enviarData, dataEnviada] = useState(null); 

  const handleSubmit = () => {
    dataEnviada({ id, nombre, email, phone });
  };

  const handleNewUser = () => {
    setId('');
    setNombre('');
    setEmail('');
    setPhone('');
    dataEnviada(null);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image}
        source = {FNLogo}
      />
      {enviarData === null ? ( 
        <>
          <TextInput placeholder="ID"
            value={id}
            onChangeText={setId}
            style={styles.input}
          />
          <TextInput placeholder="Name"
            value={nombre}
            onChangeText={setNombre}
            style={styles.input}
          />
          <TextInput placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />
          <TextInput placeholder="Phone"
            value={phone}
            onChangeText={setPhone}
            style={styles.input}
          />
          <Button title="Submit" onPress={handleSubmit} />
        </>
      ) : ( 
        <>
          <Text>User Information:</Text>
          <Text>ID: {enviarData.id}</Text>
          <Text>Name: {enviarData.nombre}</Text>
          <Text>Email: {enviarData.email}</Text>
          <Text>Phone: {enviarData.phone}</Text>
          <Button title="Log New User" onPress={handleNewUser} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    width: '80%',
    padding: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20
  }
});
