import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View,Image,TextInput,TouchableOpacity, Dimensions} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state={
      inputnumber1: "0",inputnumber2: "0",output: "0",check: "0", // 1 = have  0 = not have
      opcheck: ""
    }
  }

  ansnumBtnPress() {
    if(this.state.opcheck == "+") {
      var anS = (Number(this.state.inputnumber1)+Number(this.state.output))
    } else if (this.state.opcheck == "-") {
      anS = (Number(this.state.inputnumber1)-Number(this.state.output))
    } else if (this.state.opcheck == "X") {
      anS = (Number(this.state.inputnumber1)*Number(this.state.output))
    } else if (this.state.opcheck == "/") {
      anS = (Number(this.state.inputnumber1)/Number(this.state.output))
    }
    this.setState({inputnumber1:anS.toString()})
    this.setState({output:anS.toString()})
    this.setState({check:"1"})
  }

  opnumBtnPress(opin) {
    var opS = this.state.output
    if(this.state.check == "1") {
      if(this.state.opcheck == "+") {
      var anS1 = (Number(this.state.inputnumber1)+Number(this.state.output))
    } else if (this.state.opcheck == "-") {
      anS1 = (Number(this.state.inputnumber1)-Number(this.state.output))
    } else if (this.state.opcheck == "X") {
      anS1 = (Number(this.state.inputnumber1)*Number(this.state.output))
    } else if (this.state.opcheck == "/") {
      anS1 = (Number(this.state.inputnumber1)/Number(this.state.output))
    }
      this.setState({inputnumber1:anS1.toString()})
      this.setState({output:anS1.toString()})
      this.setState({check:"1"})
      if(opin == "+") {
        this.setState({opcheck: "+"})
      } else if(opin == "-") {
        this.setState({opcheck: "-"})
      } else if(opin == "X") {
        this.setState({opcheck: "X"})
      } else if(opin == "/") {
        this.setState({opcheck: "/"})
      }
    } else {
        this.setState({inputnumber1:opS})
        this.setState({check:"1"})
        if(opin == "+") {
        this.setState({opcheck: "+"})
      } else if(opin == "-") {
        this.setState({opcheck: "-"})
      } else if(opin == "X") {
        this.setState({opcheck: "X"})
      } else if(opin == "/") {
        this.setState({opcheck: "/"})
      }
    }
  }


  numBtnPress(numin) {
    if(numin == "AC") {
      this.setState({output:"0"})
      this.setState({inputnumber1:"0"})
      this.setState({inputnumber2:"0"})
      this.setState({check:"0"})
      this.setState({opcheck:""})
    }
    if(this.state.check == "0" || this.state.check == "1") {
      if(this.state.output == "0") {
        if(numin == "1") {
          this.setState({output:"1"})
        } else if (numin == "2") {
          this.setState({output:"2"})
        } else if (numin == "3") {
          this.setState({output:"3"})
        } else if (numin == "4") {
          this.setState({output:"4"})
        } else if (numin == "5") {
          this.setState({output:"5"})
        } else if (numin == "6") {
          this.setState({output:"6"})
        } else if (numin == "7") {
          this.setState({output:"7"})
        } else if (numin == "8") {
          this.setState({output:"8"})
        } else if (numin == "9") {
          this.setState({output:"9"})
        } else if (numin == ".") {
          this.setState({output:"0."})
        }
      }
      else {
        if(numin == "1") {
          var temp1 = this.state.output+"1"
          this.setState({output:temp1})
        } else if(numin == "2") {
          var temp2 = this.state.output+"2"
          this.setState({output:temp2})
        } else if(numin == "3") {
          var temp3 = this.state.output+"3"
          this.setState({output:temp3})
        } else if(numin == "4") {
          var temp4 = this.state.output+"4"
          this.setState({output:temp4})
        } else if(numin == "5") {
          var temp5 = this.state.output+"5"
          this.setState({output:temp5})
        } else if(numin == "6") {
          var temp6 = this.state.output+"6"
          this.setState({output:temp6})
        } else if(numin == "7") {
          var temp7 = this.state.output+"7"
          this.setState({output:temp7})
        } else if(numin == "8") {
          var temp8 = this.state.output+"8"
          this.setState({output:temp8})
        } else if(numin == "9") {
          var temp9 = this.state.output+"9"
          this.setState({output:temp9})
        } else if(numin == "0") {
          var temp0 = this.state.output+"0"
          this.setState({output:temp0})
        } else if(numin == ".") {
          var temp00 = this.state.output+"."
          this.setState({output:temp00})
        }
      }
    } else {
      if(numin == "1") {
        this.setState({output:"1"})
      } else if (numin == "2") {
        this.setState({output:"2"})
      } else if (numin == "3") {
        this.setState({output:"3"})
      } else if (numin == "4") {
        this.setState({output:"4"})
      } else if (numin == "5") {
        this.setState({output:"5"})
      } else if (numin == "6") {
        this.setState({output:"6"})
      } else if (numin == "7") {
        this.setState({output:"7"})
      } else if (numin == "8") {
        this.setState({output:"8"})
      } else if (numin == "9") {
        this.setState({output:"9"})
      } else if (numin == "0") {
        this.setState({output:"0"})
      } else if (numin == "0.") {
        this.setState({output:"0."})
      }
      this.setState({check:"1"})
    }
  }

  render() {
    return (

      <LinearGradient
        colors={['#000000', '#000000', '#000000']}
        style={styles.container}>

        <View style={{flex: 1}}>
          <View style={{flex: 1}}>
          </View>
          <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              <View style={{flex: 1}}>
                <Text style={styles.txtOut}>{this.state.output}</Text>
              </View>
          </View>
           <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              <View style={{flex: 1}}>
              <TouchableOpacity style={styles.buttonSecondary}
              onPress={()=>this.numBtnPress("AC")}>
              <Text style={styles.textSecondary}>AC</Text>
              </TouchableOpacity>
              </View>

              <View style={{flex: 1}}>
              <TouchableOpacity style={styles.buttonSecondary}>
              <Text style={styles.textSecondary}>+/-</Text>
              </TouchableOpacity>
              </View>

              <View style={{flex: 1}}>
              <TouchableOpacity style={styles.buttonSecondary}>
              <Text style={styles.textSecondary}>%</Text>
              </TouchableOpacity>
              </View>

              <View style={{flex: 1}}>
              <TouchableOpacity style={styles.buttonAccent} 
              onPress={()=>this.opnumBtnPress("/")}>
              <Text style={styles.text}>÷</Text>
              </TouchableOpacity>
              </View>
          </View>

           <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              <View style={{flex: 1}}>
              <TouchableOpacity style={styles.button} 
              onPress={()=>this.numBtnPress("7")}>
              <Text style={styles.text}>7</Text>
              </TouchableOpacity>
              </View>

              <View style={{flex: 1}}>
              <TouchableOpacity style={styles.button} 
              onPress={()=>this.numBtnPress("8")}>
              <Text style={styles.text}>8</Text>
              </TouchableOpacity>
              </View>

              <View style={{flex: 1}}>
              <TouchableOpacity style={styles.button} 
              onPress={()=>this.numBtnPress("9")}>
              <Text style={styles.text}>9</Text>
              </TouchableOpacity>
              </View>

              <View style={{flex: 1}}>
              <TouchableOpacity style={styles.buttonAccent} 
              onPress={()=>this.opnumBtnPress("X")}>
              <Text style={styles.text}>x</Text>
              </TouchableOpacity>
              </View>
          </View>

           <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              <View style={{flex: 1}}>
              <TouchableOpacity style={styles.button} 
              onPress={()=>this.numBtnPress("4")}>
              <Text style={styles.text}>4</Text>
              </TouchableOpacity>
              </View>

              <View style={{flex: 1}}>
              <TouchableOpacity style={styles.button} 
              onPress={()=>this.numBtnPress("5")}>
              <Text style={styles.text}>5</Text>
              </TouchableOpacity>
              </View>

              <View style={{flex: 1}}>
              <TouchableOpacity style={styles.button} 
              onPress={()=>this.numBtnPress("6")}>
              <Text style={styles.text}>6</Text>
              </TouchableOpacity>
              </View>

              <View style={{flex: 1}}>
              <TouchableOpacity style={styles.buttonAccent} 
              onPress={()=>this.opnumBtnPress("-")}>
              <Text style={styles.text}>-</Text>
              </TouchableOpacity>
              </View>
          </View>

          <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              <View style={{flex: 1}}>
              <TouchableOpacity style={styles.button} 
              onPress={()=>this.numBtnPress("1")}>
              <Text style={styles.text}>1</Text>
              </TouchableOpacity>
              </View>

              <View style={{flex: 1}}>
              <TouchableOpacity style={styles.button} 
              onPress={()=>this.numBtnPress("2")}>
              <Text style={styles.text}>2</Text>
              </TouchableOpacity>
              </View>

              <View style={{flex: 1}}>
              <TouchableOpacity style={styles.button} 
              onPress={()=>this.numBtnPress("3")}>
              <Text style={styles.text}>3</Text>
              </TouchableOpacity>
              </View>

              <View style={{flex: 1}}>
              <TouchableOpacity style={styles.buttonAccent} 
              onPress={()=>this.opnumBtnPress("+")}>
              <Text style={styles.text}>+</Text>
              </TouchableOpacity>
              </View>
          </View>

          <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              <View style={{flex: 2}}>
              <TouchableOpacity style={styles.buttonDouble} 
              onPress={()=>this.numBtnPress("0")}>
              <Text style={styles.text}>0</Text>
              </TouchableOpacity>
              </View>

              <View style={{flex: 1}}>
              <TouchableOpacity style={styles.button}
              onPress={()=>this.numBtnPress(".")}>
              <Text style={styles.text}>.</Text>
              </TouchableOpacity>
              </View>


              <View style={{flex: 1}}>
              <TouchableOpacity style={styles.buttonAccent}>
              <Text style={styles.text} 
              onPress={()=>this.ansnumBtnPress()}>=</Text>
              </TouchableOpacity>
              </View>
          </View> 
          
        </View>
      </LinearGradient>
    );
  }
}


const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end"
  },
  text: {
    color: "#fff",
    fontSize: 32
  },
  textSecondary: {
    color: "#060606",
    fontSize: 29
  },
  button: {
    backgroundColor: "#333333",

    height: Math.floor(buttonWidth - 10),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWidth),
    margin: 7,
  },
  buttonDouble: {
    backgroundColor: "#333333",

    height: Math.floor(buttonWidth - 10),
    alignItems: "flex-start",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWidth),
    paddingLeft: 40,
    margin:7
  },
  buttonSecondary: {
    backgroundColor: "#a6a6a6", // สีเทา

    height: Math.floor(buttonWidth - 10),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWidth),
    margin: 7
  },
  buttonAccent: {
    backgroundColor: "#f09a36", // สีส้ม

    height: Math.floor(buttonWidth - 10),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWidth),
    margin: 7
  },
  txtOut: {
    alignItems: 'center',
    fontSize: 60,
    height:100,
    padding: 20,
    margin:1,
    borderColor:'#000000',
    borderWidth : 1,
    backgroundColor: '#000000',
    color: 'white',
    textAlign: 'right'
  }
})