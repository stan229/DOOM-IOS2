import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text,
  SectionList,
  NativeModules,
} from 'react-native';
const { MenuManager } = NativeModules;
const maps = [
  {
    title: 'Knee-Deep in the Dead',
    data: [
      {
        text: 'Hanger',
        episode: 1,
        map: 1,
      },
      {
        text: 'Nuclear Plant',
        episode: 1,
        map: 2,
      },
      {
        text: 'Toxin Refinery',
        episode: 1,
        map: 3,
      },
      {
        text: 'Command Control',
        episode: 1,
        map: 4,
      },
      {
        text: 'Phobos Lab ',
        episode: 1,
        map: 5,
      },
      {
        text: 'Central Processing',
        episode: 1,
        map: 6,
      },
      {
        text: 'Computer Station',
        episode: 1,
        map: 7,
      },
      {
        text: 'Phobos Anomaly',
        episode: 1,
        map: 8,
      },
      {
        text: 'Military Base',
        episode: 1,
        map: 9,
      },
    ],
  },
  {
    title: 'The Shores of Hell',
    data: [
      {
        text: 'Deimos Anomaly',
        episode: 2,
        map: 1,
      },
      {
        text: 'Containment Area',
        episode: 2,
        map: 2,
      },
      {
        text: 'Refinery',
        episode: 2,
        map: 3,
      },
      {
        text: 'Deimos Lab',
        episode: 2,
        map: 4,
      },
      {
        text: 'Command Center',
        episode: 2,
        map: 5,
      },
      {
        text: 'Halls of the Damned',
        episode: 2,
        map: 6,
      },
      {
        text: 'Spawning Vats',
        episode: 2,
        map: 7,
      },
      {
        text: 'Tower of Babel',
        episode: 2,
        map: 8,
      },
      {
        text: 'Fortress of Mystery',
        episode: 2,
        map: 9,
      },
    ],
  },
  {
    title: 'Inferno',
    data: [
      {
        text: 'Hell Keep',
        episode: 3,
        map: 1,
      },
      {
        text: 'Slough of Despair',
        episode: 3,
        map: 2,
      },
      {
        text: 'Pandemonium',
        episode: 3,
        map: 3,
      },
      {
        text: 'House of Pain',
        episode: 3,
        map: 4,
      },
      {
        text: 'Unholy Cathedral',
        episode: 3,
        map: 5,
      },
      {
        text: 'Mt. Erebrus',
        episode: 3,
        map: 6,
      },
      {
        text: 'Limbo',
        episode: 3,
        map: 7,
      },
      {
        text: 'Dis',
        episode: 3,
        map: 8,
      },
      {
        text: 'Warrens',
        episode: 3,
        map: 9,
      },
    ],
  },
  {
    title: 'Thy Flesh Consumed',
    data: [
      {
        text: 'Hell Beneath',
        episode: 4,
        map: 1,
      },
      {
        text: 'Perfect Hatred',
        episode: 4,
        map: 2,
      },
      {
        text: 'Sever the Wicked',
        episode: 4,
        map: 3,
      },
      {
        text: 'Unruly Evil',
        episode: 4,
        map: 4,
      },
      {
        text: 'They Will Repent',
        episode: 4,
        map: 5,
      },
      {
        text: 'Against Thee Wickedly',
        episode: 4,
        map: 6,
      },
      {
        text: 'And Hell Followed',
        episode: 4,
        map: 7,
      },
      {
        text: 'Unto the Cruel',
        episode: 4,
        map: 8,
      },
      {
        text: 'Fear',
        episode: 4,
        map: 9,
      },
    ],
  },
];

export default class DoomMenu extends Component {
  startGame = (episode = 1, map = 1) => {
    MenuManager.startGame(episode, map);
  };

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <Button color="white" title="Start Game" onPress={() => this.startGame()} />
        </View>
        <View style={{ flex: 2, padding: 24, alignItems: 'center' }}>
          <SectionList
            renderItem={({ item, index }) => (
              <Text
                style={{ color: 'white' }}
                onPress={() => this.startGame(item.episode, item.map)}
                key={index}
              >
                {item.text}
              </Text>
            )}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={{ fontWeight: 'bold', color: 'white' }}>
                {title}
              </Text>
            )}
            sections={maps}
            keyExtractor={(item, index) => item + index}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});
