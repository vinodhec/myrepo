
import React from 'react';
import { Button, Icon, List, ListItem, Divider, Text, Layout } from '@ui-kitten/components';
import { StyleSheet, ImageBackground, Switch, View } from 'react-native';

const data = [{
  title: 'Carrot',
  searchCode: 'CAR',
  productId: 12,
  stock: '10',
  units:'kg',
  price: 50,
  imgSrc: 'https://www.bigbasket.com/media/uploads/p/s/10000072_16-fresho-carrot-orange.jpg'
},
{
  title: 'Beans',
  searchCode: 'BEA',
  productId: 14,
  stock: 100,
  units:'kg',
  price: 500,
  enabled:true,
  imgSrc: 'https://www.bigbasket.com/media/uploads/p/s/40089741_2-fresho-beans-haricot.jpg'
},
{
  title: 'Spinach',
  searchCode: 'SPI',
  productId: 18,
  stock: 5,
  units:'kathai',
  price: 5,
  enabled:true,
  imgSrc: 'https://www.bigbasket.com/media/uploads/p/s/40208460_1-fresho-arai-keerai.jpg'
}];

export const ListItemSimpleUsageShowcase = () => {

  const renderItemAccessory = (props) => (
    <Switch style={{marginTop:-15}} value={props.enabled} />);

  const renderItemIcon = (props) => (
    <ImageBackground style={{ width: 50, height: 50 }} source={{ uri: props.imgSrc }} />
  );

  const renderItem = ({ item, index }) => (
    <ListItem 
    title={evaProps => <Text category="h6" style={{marginLeft:6}}>{item.title}</Text>}
    description={<View><View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-around', height:40, alignItems:'center' }}>
        <Text category="p2" style={{flexBasis:0,flexGrow:1}} >
           {item.searchCode}
        </Text>

        <Text category="p2" style={{flexBasis:0,flexGrow:1}} >
          Id: {item.productId}
        </Text>
        <Text category="p2" style={{flexBasis:0,flexGrow:2,marginLeft:'auto'}} >
          Stock: {item.stock} {item.units}
        </Text>

        <Text category="p2" style={{flexBasis:0,flexGrow:1,marginLeft:'auto'}}>
          ₹{item.price}
        </Text>



      </View>
      </View>}
      accessoryLeft={renderItemIcon.bind(null, item)}
      accessoryRight={renderItemAccessory.bind(null,item)}
    />
  );

  return (
    <List
      style={styles.container}
      data={data}
      ItemSeparatorComponent={Divider}

      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    // maxHeight: 192,
  },
});