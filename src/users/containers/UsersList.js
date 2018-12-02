import React from 'react';
import styled from 'styled-components';
import ContactItem from '../components/UsersListItem';
import { Metrics, Fonts, Colors } from '../../main/themes';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import { withRouter } from 'react-router';
import Scenes from '../../main/navigation/Scenes';
import { updateSelectedUser } from '../../offers/actions/offersActions';
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
  changeSelectedUser(id: number) {
    this.props.history.push(Scenes.Contact);
  }

  render() {
    return (
      <React.Fragment>
        <ContactTypeLabel>{this.props.title}</ContactTypeLabel>
        {this.props.contacts.map((contact: Profile) => {
          return (
          <div key={contact.idUser} onClick={() => this.changeSelectedUser(contact)}>
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
      updateSelectedUser,
    }, dispatch),
  };
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContactList));