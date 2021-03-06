import {StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import PlayerSelect from './PlayerSelect';
import {connect} from 'react-redux';

class SelectContainer extends Component {
  renderSelectOption = () => {
    return this.props.selectOption.map(item => (
      <PlayerSelect
        key={item.type}
        selectOption={item}
        onPress={() =>
          this.props.dispatch({type: 'PLAYER_SELECT', payload: item})
        }
        selectedOption={this.props.selectedOption}
      />
    ));
  };
  render() {
    return <View style={styles.selectView}>{this.renderSelectOption()}</View>;
  }
}
const mapStateToProps = state => {
  return {
    selectOption: state.gameReducer.selectOption,
    selectedOption: state.gameReducer.playerSelected.type,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPressSelectItem: selectedItem =>
      dispatch({type: 'PLAYER_SELECT', payload: selectedItem}),
  };
};
export default connect(mapStateToProps)(SelectContainer);
const styles = StyleSheet.create({
  selectView: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 50,
    justifyContent: 'space-between',
  },
});
