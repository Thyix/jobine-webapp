import React from 'react';
import styled from 'styled-components';
import ContactItem from '../components/UsersListItem';
import { Metrics, Fonts, Colors } from '../../main/themes';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import { withRouter } from 'react-router';
import Scenes from '../../main/navigation/Scenes';
const ContactTypeLabel = styled.div`
${Fonts.toCSS(Fonts.medium())}
color: ${Colors.primary} !important;
margin-bottom: ${Metrics.spacing.small}px !important;
`;

type Props = {
  contacts: Contact[],
  title: string,
  history: {
    push: Function,
  },
};

class ContactList extends React.Component<Props>  {
  changeSelectedUser() {
    
    this.props.history.push(Scenes.Contact);
  }
  render() {
    return (
      <React.Fragment>
        <ContactTypeLabel>{title}</ContactTypeLabel>
        {contacts.map((contact: Profile) => {
          return (
          <div onClick={() => this.changeSelectedUser()}>
            <ContactItem
              contact={contact}
              key={contact.idUser}
            />
          </div>
          )
        })}
      </React.Fragment>
    );
  }
};

const mapStateToProps = (state: any) => {
  return {
  };
};

function mapDispatchToProps(dispatch: Function) {
  return {
    actions: bindActionCreators({
    }, dispatch),
  };
}



export default withRouter(ContactList);