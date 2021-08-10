/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Pressable,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  Linking,
} from 'react-native';
import Article from '../models/Articles';

import getArticles from '../newsApiCache';

const NewsScreen: React.FC<unknown> = () => {
  function limitArticlesTo50() {
    const articlesMaximum: Article[] = [];
    const articles = getArticles();
    for (let i = 0; i < articles.length; i += 1) {
      if (articlesMaximum.length < 50) {
        articlesMaximum.push(articles[i]);
      }
    }
    return articlesMaximum;
  }

  const maximumOf50Articles: Article[] = limitArticlesTo50();
  const handlePress = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        {maximumOf50Articles.map((element, title) => (
          <Pressable onPress={() => handlePress(element.url)}
            key={title} style={newsListStyles.container } >
            <Text style={newsListStyles.header }> {`${element.title}`}</Text>
            <Text style={newsListStyles.wordContent } > {`${element.description}`}</Text>
            <Image style={newsListStyles.pictures } source={{ uri: `${element.urlToImage}` }} />
          </Pressable>

        ))}
      </ScrollView>
    </SafeAreaView>

  );
};

const newsListStyles = StyleSheet.create({

  container: {
    alignItems: 'center',
    flex: 1,

    marginTop: 10,
    width: '100%',
  },
  header: {
    fontSize: 20,
    fontWeight: '500',
    paddingBottom: 10,
    width: '90%',
  },
  pictures: {
    height: 300,
    justifyContent: 'center',
    resizeMode: 'center',
    width: '90%',
  },
  wordContent: {
    width: '90%',
  },

});

export default NewsScreen;
