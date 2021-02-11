import React from 'react';
import db from '../config'
import { View, Text, TouchableOpacity, TextInput ,FlatList} from 'react-native';
import { ListViewBase } from 'react-native';
import { ListItem } from 'react-native-elements';

export default  class BookDonate  extends React.Component {
    constructor(){
        super()
        this.state={
            requestedBookList:[]
        }
    }
    requestedBookList=()=>{
        db.collection("requested_books")
        .onSnapshot((snapshot)=>{
            var snapshot1=snapshot.docs.map((document)=>{document.data()})
            this.setState({requestedBookList:snapshot1})
        })
    }
    componentDidMount(){this.requestedBookList()}
  render() {
    return (
      <View>
     <FlatList keyExtractor = {(item,index)=>{index.toString()}}
     data={this.state.requestedBookList}
     renderItem={({item,i})=>{
       return(
         <ListItem key={i} title={item.book_name} subtitle={item.Reason} rightElement={
           <TouchableOpacity><Text>
             donate
             </Text></TouchableOpacity>
           }>

         </ListItem>
       )
     }}
     ></FlatList>   
      </View>
    );
  }
}