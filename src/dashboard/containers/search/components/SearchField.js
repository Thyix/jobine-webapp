// @flow

import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import { InputAdornment, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const SearchTextField = styled(TextField)`
  width: 100% !important;
`;

const searchIcon  = 
  <InputAdornment position="start" variant="outlined">
    <SearchIcon />
  </InputAdornment>
;

type Props = {
  onFocus: Function,
  onQueryChanged: (query: string) => Promise<void>,
  onSearch: (query: string) => Promise<void>,
  t: (key: string) => string,
  query: string,
}

type State = {
}

type TextChangedEvent = {
  target: {
    value: string,
  },
};

class SearchField extends React.PureComponent<Props, State> {

  state = {
  };

  onTextChanged = async (event: TextChangedEvent) => {
    this.props.onQueryChanged(event.target.value);

    this.search(event.target.value);
  };

  search = _.debounce(async (query: string): Promise<void> => {
    if (!query) {
      return;
    }

    this.props.onSearch(query);
  }, 500);

  render() {
    const { onFocus, query } = this.props;

    return (
      <SearchTextField
        InputProps={{
          onFocus: onFocus,
          startAdornment: searchIcon,
        }}
        id="searchTextField"
        onChange={this.onTextChanged}
        placeholder={'Rechercher'}
        type="search"
        value={query}
      />
    );
  }

};

export default SearchField;