// @flow
import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
// core components
import GridItem from 'components/Grid/GridItem.js'
import GridContainer from 'components/Grid/GridContainer.js'
import CustomInput from 'components/CustomInput/CustomInput.js'
import Button from 'components/CustomButtons/Button.js'
import Card from 'components/Card/Card.js'
import CardHeader from 'components/Card/CardHeader.js'
import CardAvatar from 'components/Card/CardAvatar.js'
import CardBody from 'components/Card/CardBody.js'
import CardFooter from 'components/Card/CardFooter.js'

import avatar from 'assets/img/faces/marc.jpg'

const styles = {
  cardCategoryWhite: {
    color: 'rgba(255,255,255,.62)',
    margin: '0',
    fontSize: '14px',
    marginTop: '0',
    marginBottom: '0',
  },
  cardTitleWhite: {
    color: '#FFFFFF',
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: '300',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: '3px',
    textDecoration: 'none',
  },
}

const useStyles = makeStyles(styles)

export default function UserProfile() {
  const classes = useStyles()

  return (
    <div>
      <GridContainer>
        <GridItem md={8} sm={12} xs={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
              <p className={classes.cardCategoryWhite}>Complete your profile</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem md={5} sm={12} xs={12}>
                  <CustomInput
                    formControlProps={{
                      fullWidth: true,
                    }}
                    id="company-disabled"
                    inputProps={{
                      disabled: true,
                    }}
                    labelText="Company (disabled)"
                  />
                </GridItem>
                <GridItem md={3} sm={12} xs={12}>
                  <CustomInput
                    formControlProps={{
                      fullWidth: true,
                    }}
                    id="username"
                    labelText="Username"
                  />
                </GridItem>
                <GridItem md={4} sm={12} xs={12}>
                  <CustomInput
                    formControlProps={{
                      fullWidth: true,
                    }}
                    id="email-address"
                    labelText="Email address"
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem md={6} sm={12} xs={12}>
                  <CustomInput
                    formControlProps={{
                      fullWidth: true,
                    }}
                    id="first-name"
                    labelText="First Name"
                  />
                </GridItem>
                <GridItem md={6} sm={12} xs={12}>
                  <CustomInput
                    formControlProps={{
                      fullWidth: true,
                    }}
                    id="last-name"
                    labelText="Last Name"
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem md={4} sm={12} xs={12}>
                  <CustomInput
                    formControlProps={{
                      fullWidth: true,
                    }}
                    id="city"
                    labelText="City"
                  />
                </GridItem>
                <GridItem md={4} sm={12} xs={12}>
                  <CustomInput
                    formControlProps={{
                      fullWidth: true,
                    }}
                    id="country"
                    labelText="Country"
                  />
                </GridItem>
                <GridItem md={4} sm={12} xs={12}>
                  <CustomInput
                    formControlProps={{
                      fullWidth: true,
                    }}
                    id="postal-code"
                    labelText="Postal Code"
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem md={12} sm={12} xs={12}>
                  <InputLabel style={{ color: '#AAAAAA' }}>About me</InputLabel>
                  <CustomInput
                    formControlProps={{
                      fullWidth: true,
                    }}
                    id="about-me"
                    inputProps={{
                      multiline: true,
                      rows: 5,
                    }}
                    labelText="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary">Update Profile</Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem md={4} sm={12} xs={12}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img alt="..." src={avatar} />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
              <h4 className={classes.cardTitle}>Alec Thompson</h4>
              <p className={classes.description}>
                Don't be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p>
              <Button color="primary" round>
                Follow
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  )
}
