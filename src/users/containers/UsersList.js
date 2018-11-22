import React from 'react';
import styled from 'styled-components';
import ContactItem from '../components/UsersListItem';
import { Metrics, Fonts, Colors } from '../../main/themes';

const ContactTypeLabel = styled.div`
${Fonts.toCSS(Fonts.medium())}
color: ${Colors.primary} !important;
margin-bottom: ${Metrics.spacing.small}px !important;
`;

type Props = {
  contacts: Contact[],
  title: string,
};

const ContactList = ({ contacts, title }: Props) => {
  return (
    <React.Fragment>
      <ContactTypeLabel>{title}</ContactTypeLabel>
      {contacts.map((contact: Profile) => {
        return (
          <ContactItem
            contact={contact}
            key={contact.idUser}
          />
        )
      })}
    </React.Fragment>
  );
};

export default ContactList;