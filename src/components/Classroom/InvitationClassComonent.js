import { Grid, Image, Label, Segment, Button, Card } from "semantic-ui-react";
import React from "react";
import styled from 'styled-components'



export default function InvitationClassComonent() {
  return (
    <InvitationStyledCompoenent >
      <Grid columns={1} >
        <Grid.Column >
          <Segment raised className="mobile">
            <Label as="a" color="teal" ribbon>
              Class Invitation
            </Label>
            
              <Grid.Column >
                
                <Card.Group className="invitations">
          <Card>
        <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='/images/asma.jpg'
        />
        <Card.Header>Integration Web</Card.Header>
        <Card.Meta>Asma Ayari </Card.Meta>
        <Card.Description>
          Asma invited you to join this course 
        </Card.Description>
       </Card.Content>
       <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
       </Card.Content>
         </Card>
        
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='images/melek.jpg'
        />
        <Card.Header>CCA4</Card.Header>
        <Card.Meta>Melek Dhaouadi</Card.Meta>
        <Card.Description>
          Melek invited you to join this course 
        </Card.Description>
      </Card.Content>
        <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
       </Card.Content>
        </Card>
         </Card.Group>
              </Grid.Column>
            
          </Segment>
        </Grid.Column>
      </Grid>
    </InvitationStyledCompoenent>
  );
}

const InvitationStyledCompoenent=styled.div`
@media(max-width:667px){
  .mobile{
    width:75% !important;
  }
}
  
`;