import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props)

    this.state = {
      altura: 0,
      massa: 0,
      resultado: 0,
      resultadoText: ""
    }

    this.calcular = this.calcular.bind(this);
  }

  calcular() {
    let imc = this.state.massa / (this.state.altura * this.state.altura);
    let s = this.state;
    s.resultado = imc;

    if (s.resultado < 16) {
      s.resultadoText = "Tripa Seca"
    } else if (s.resultado < 17) {
      s.resultadoText = "Chassi de Grilo"
    } else if (s.resultado < 18) {
      s.resultadoText = "Pilha de Osso"
    } else if (s.resultado < 25) {
      s.resultadoText = "Você é uma delicinha..."
    } else if (s.resultado < 30) {
      s.resultadoText = "Pudim de Banha"
    } else if (s.resultado < 35) {
      s.resultadoText = "Chupeta de Baleia"
    } else if (s.resultado < 40) {
      s.resultadoText = "Tem ouvido muito a palavra mórbido ultimamente?"
    } else {
      s.resultadoText = "Não defini o que você é... Tente novamente!"
    }


    this.setState(s);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.entradas}>
          <TextInput keyboardType="numeric" placeholder="Peso" style={styles.input} onChangeText={(massa) => {this.setState({massa})}} maxLength={3} />
          <TextInput keyboardType="numeric" placeholder="Altura" style={styles.input} onChangeText={(altura) => {this.setState({altura})}} maxLength={4} />
        </View>

        <TouchableOpacity style={styles.button} onPress={this.calcular} >
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>

        <Text style={[styles.resultado, {fontSize: 25}]}>Seu IMC é de:</Text>
        <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
        <Text style={[styles.resultado, {fontSize: 35}]}>{this.state.resultadoText}</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },

  entradas: {
    flexDirection: 'row',
  },

  input: {
    height: 80,
    textAlign: "center",
    width: "50%",
    fontSize: 50,
    marginTop: 24,
  },

  button: {
    backgroundColor: "#89ffa5",
  },

  buttonText: {
    alignSelf: 'center',
    padding: 30,
    fontSize: 25,
    color: "#6dc4a4",
    fontWeight: 'bold',
  },

  resultado: {
    alignSelf: "center",
    color: "lightgray",
    fontSize: 65,
    padding: 15,
  }
});
