import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {icons, images, SIZES, FONTS, COLORS} from '../constants/index';

export default function HomeScreen({navigation}) {
  const initialCurrentLocation = {
    cityName: 'Gurugram',
    gps: {
      latitude: 28.4595,
      longitude: 77.0266,
    },
  };

  const categoryData = [
    {id: 1, name: 'Rice', icon: icons.rice_bowl},
    {id: 2, name: 'Noodles', icon: icons.noodle},
    {id: 3, name: 'Hot Dogs', icon: icons.hotdog},
    {id: 4, name: 'Salads', icon: icons.salad},
    {id: 5, name: 'Burgers', icon: icons.hamburger},
    {id: 6, name: 'Pizza', icon: icons.pizza},
    {id: 7, name: 'Snacks', icon: icons.fries},
    {id: 8, name: 'Sushi', icon: icons.sushi},
    {id: 9, name: 'Desserts', icon: icons.donut},
    {id: 10, name: 'Drinks', icon: icons.drink},
  ];

  const restaurantData = [
    {
      id: 1,
      name: 'Burger',
      rating: 4.8,
      categories: [5, 7],
      priceRating: 1,
      photo: images.burger_restaurant,
      duration: '30 - 45 min',
      location: {
        latitude: 28.3597,
        longitude: 77.0799,
      },
      courier: {avatar: images.avatar_1, name: 'Amy'},
      menu: [
        {
          menuId: 1,
          name: 'Crispy Chicken Burger',
          photo: images.crispy_chicken_burger,
          description: 'Burger with crispy chicken, cheese and lettuce',
          calories: 200,
          price: 10,
        },
        {
          menuId: 2,
          name: 'Crispy Chicken Burger with Honey Mustard',
          photo: images.honey_mustard_chicken_burger,
          description: 'Crispy Chicken Burger with Honey Mustard Coleslaw',
          calories: 250,
          price: 15,
        },
        {
          menuId: 3,
          name: 'Crispy Baked French Fries',
          photo: images.baked_fries,
          description: 'Crispy Baked French Fries',
          calories: 194,
          price: 8,
        },
      ],
    },
    {
      id: 2,
      name: 'Pizza',
      rating: 4.8,
      categories: [2, 4, 6],
      priceRating: 3,
      photo: images.pizza_restaurant,
      duration: '15 - 20 min',
      location: {
        latitude: 28.3597,
        longitude: 77.0799,
      },
      courier: {avatar: images.avatar_2, name: 'Jackson'},
      menu: [
        {
          menuId: 4,
          name: 'Hawaiian Pizza',
          photo: images.hawaiian_pizza,
          description: 'Canadian bacon, homemade pizza crust and pizza sauce',
          calories: 250,
          price: 15,
        },
        {
          menuId: 5,
          name: 'Tomato & Basil Pizza',
          photo: images.pizza,
          description:
            'Fresh tomatoes, aromatic basil pesto and melted bocconcini',
          calories: 250,
          price: 20,
        },
        {
          menuId: 6,
          name: 'Tomato Pasta',
          photo: images.tomato_pasta,
          description: 'Pasta with fresh tomatoes',
          calories: 100,
          price: 10,
        },
        {
          menuId: 7,
          name: 'Mediterranean Chopped Salad',
          photo: images.salad,
          description: 'Finely chopped lettuce, tomatoes, cucumbers',
          calories: 100,
          price: 10,
        },
      ],
    },
    {
      id: 3,
      name: 'Hotdogs',
      rating: 4.8,
      categories: [3],
      priceRating: 3,
      photo: images.hot_dog_restaurant,
      duration: '20 - 25 min',
      location: {
        latitude: 28.3597,
        longitude: 77.0799,
      },
      courier: {avatar: images.avatar_3, name: 'James'},
      menu: [
        {
          menuId: 8,
          name: 'Chicago Style Hot Dog',
          photo: images.chicago_hot_dog,
          description: 'Fresh tomatoes, all beef hot dogs',
          calories: 100,
          price: 20,
        },
      ],
    },
    {
      id: 4,
      name: 'Sushi',
      rating: 4.8,
      categories: [8],
      priceRating: 3,
      photo: images.japanese_restaurant,
      duration: '10 - 15 min',
      location: {
        latitude: 28.3597,
        longitude: 77.0799,
      },
      courier: {avatar: images.avatar_4, name: 'Ahmed'},
      menu: [
        {
          menuId: 9,
          name: 'Sushi Sets',
          photo: images.sushi,
          description: 'Fresh salmon, sushi rice, fresh juicy avocado',
          calories: 100,
          price: 50,
        },
      ],
    },
    {
      id: 5,
      name: 'Cuisine',
      rating: 4.8,
      categories: [1, 2],
      priceRating: 2,
      photo: images.noodle_shop,
      duration: '15 - 20 min',
      location: {
        latitude: 28.3597,
        longitude: 77.0799,
      },
      courier: {avatar: images.avatar_4, name: 'Muthu'},
      menu: [
        {
          menuId: 10,
          name: 'Kolo Mee',
          photo: images.kek_mee,
          description: 'Noodles with char siu',
          calories: 200,
          price: 20,
        },
        {
          menuId: 11,
          name: 'Sarawak Laksa',
          photo: images.sarawak_laksa,
          description: 'Vermicelli noodles, cooked prawns',
          calories: 3000,
          price: 15,
        },
        {
          menuId: 12,
          name: 'Nasi Lemak',
          photo: images.nasi_lemak,
          description: 'A traditional Malay rice dish',
          calories: 300,
          price: 12,
        },
        {
          menuId: 13,
          name: 'Nasi Briyani with Mutton',
          photo: images.nasi_briyani_mutton,
          description: 'A traditional Indian rice dish with mutton',
          calories: 300,
          price: 8,
        },
      ],
    },
    {
      id: 6,
      name: 'Desserts',
      rating: 4.9,
      categories: [9, 10],
      priceRating: 1,
      photo: images.kek_lapis_shop,
      duration: '35 - 40 min',
      location: {
        latitude: 28.3597,
        longitude: 77.0799,
      },
      courier: {avatar: images.avatar_5, name: 'Jessie'},
      menu: [
        {
          menuId: 14,
          name: 'Teh C Peng',
          photo: images.teh_c_peng,
          description: 'Three Layer Teh C Peng',
          calories: 100,
          price: 2,
        },
        {
          menuId: 15,
          name: 'ABC Ice Kecang',
          photo: images.ice_kacang,
          description: 'Shaved Ice with red beans',
          calories: 100,
          price: 3,
        },
        {
          menuId: 16,
          name: 'Kek Lapis',
          photo: images.kek_lapis,
          description: 'Layer cakes',
          calories: 300,
          price: 20,
        },
      ],
    },
  ];

  const [currentLocation, setCurrentLocation] = useState(
    initialCurrentLocation,
  );
  const [categories, setCategories] = useState(categoryData);
  const [restaurants, setRestaurants] = useState(restaurantData);
  const [selectedCategory, setSelectedCategory] = useState(null);

  function onSelectedCategory(category) {
    let restaurantList = restaurantData.filter(a =>
      a.categories.includes(category.id),
    );
    setRestaurants(restaurantList);
    setSelectedCategory(category);
  }

  function getCategoryNameById(id) {
    let category = categories.filter(a => a.id == id);
    if (category.length > 0) {
      return category[0].name;
    }
    return '';
  }

  const RenderHeader = () => {
    return (
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerIcon1}>
          <Image
            source={icons.nearby}
            resizeMode="contain"
            style={styles.headerIcon}
          />
        </TouchableOpacity>
        <View style={styles.locationView}>
          <View style={styles.locationInnerView}>
            <Text style={{...FONTS.h3}}>{currentLocation.cityName}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.headerIcon2}>
          <Image
            source={icons.shopping_basket}
            resizeMode="contain"
            style={styles.headerIcon}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const RenderMainCategories = () => {
    const renderItem = ({item}) => {
      return (
        <TouchableOpacity
          style={{
            padding: SIZES.padding,
            paddingBottom: SIZES.padding * 2,
            backgroundColor:
              selectedCategory?.id == item.id ? COLORS.primary : COLORS.white,
            borderRadius: SIZES.radius,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: SIZES.padding,
            ...styles.shadow,
          }}
          onPress={() => onSelectedCategory(item)}>
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor:
                selectedCategory?.id == item.id
                  ? COLORS.white
                  : COLORS.lightGrey,
            }}>
            <Image
              source={item.icon}
              resizeMode="contain"
              style={styles.headerIcon}
            />
          </View>
          <Text
            style={{
              marginTop: SIZES.padding,
              color:
                selectedCategory?.id == item.id ? COLORS.white : COLORS.black,
              ...FONTS.body5,
            }}>
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    };
    return (
      <View style={{padding: SIZES.padding * 2}}>
        <Text style={{...FONTS.h1}}>Main</Text>
        <Text style={{...FONTS.h1}}>Categories</Text>
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
          contentContainerStyle={{paddingVertical: SIZES.padding * 2}}
          renderItem={renderItem}
        />
      </View>
    );
  };

  const RenderRestaurantList = () => {
    const renderItem = ({item}) => {
      return (
        <TouchableOpacity
          style={{marginBottom: SIZES.padding * 2}}
          onPress={() =>
            navigation.navigate('Restaurant', {
              item: item,
              currentLocation: currentLocation,
            })
          }>
          <View style={{marginBottom: SIZES.padding}}>
            <Image
              source={item.photo}
              resizeMode="cover"
              style={{width: '100%', height: 200, borderRadius: SIZES.radius}}
            />
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                height: 50,
                width: SIZES.width * 0.3,
                backgroundColor: COLORS.white,
                borderTopRightRadius: SIZES.radius,
                borderBottomLeftRadius: SIZES.radius,
                alignItems: 'center',
                justifyContent: 'center',
                ...styles.shadow,
              }}>
              <Text style={{...FONTS.h4}}>{item.duration}</Text>
            </View>
          </View>
          <Text style={{...FONTS.body2}}>{item.name}</Text>
          <View style={{marginTop: SIZES.padding, flexDirection: 'row'}}>
            <Image
              source={icons.star}
              style={{
                height: 20,
                width: 20,
                tintColor: COLORS.primary,
                marginRight: 10,
              }}
            />
            <Text style={{...FONTS.body3}}>{item.rating}</Text>
            <View style={{flexDirection: 'row', marginLeft: 10}}>
              {item.categories.map(categoryId => {
                return (
                  <View style={{flexDirection: 'row'}} key={categoryId}>
                    <Text style={{...FONTS.body3}}>
                      {getCategoryNameById(categoryId)}
                    </Text>
                    <Text style={{...FONTS.h3, color: COLORS.darkGrey}}>
                      {' '}
                      .{' '}
                    </Text>
                  </View>
                );
              })}
              {[1, 2, 3].map(priceRating => (
                <Text
                  key={priceRating}
                  style={{
                    ...FONTS.body3,
                    color:
                      priceRating <= item.priceRating
                        ? COLORS.black
                        : COLORS.darkGrey,
                  }}>
                  $
                </Text>
              ))}
            </View>
          </View>
        </TouchableOpacity>
      );
    };
    return (
      <FlatList
        data={restaurants}
        keyExtractor={item => `${item.id}`}
        contentContainerStyle={{
          paddingHorizontal: SIZES.padding * 2,
          paddingBottom: 30,
        }}
        renderItem={renderItem}
      />
    );
  };

  return (
    <View style={styles.container}>
      <RenderHeader />
      <RenderMainCategories />
      <RenderRestaurantList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGrey4,
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    height: 50,
  },
  headerIcon1: {
    width: 50,
    paddingLeft: SIZES.padding * 2,
    justifyContent: 'center',
  },
  headerIcon2: {
    width: 50,
    paddingRight: SIZES.padding * 2,
    justifyContent: 'center',
  },
  headerIcon: {
    width: 30,
    height: 30,
  },
  locationView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationInnerView: {
    width: '70%',
    height: '100%',
    backgroundColor: COLORS.lightGrey3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.radius,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});
