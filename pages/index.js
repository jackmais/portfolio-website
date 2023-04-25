import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Avatar, Popover, Button, Text,Modal, Grid } from '@nextui-org/react';
import React from 'react';
import { Card1, Card11 } from './Card1';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  //const linkedInIcon = boxicons.icons['linkedin'];
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  return (
    <>
      <Head>
        <title>Jack Maistros</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <Grid.Container gap ={2} justify="center">
        <Grid>
        <Avatar text="profile-avatar" 
            color="error" 
            textColor="white"
            size= 'xl' 
            zoomed
            src = "/IMAGES/profile-logo.jpeg"
            pointer/>
        </Grid>
        <Grid>
        <a href="https://www.linkedin.com/in/jack-maistros/" target="_blank">
        <Avatar text="Linkedin-avatar" 
            color="primary" 
            textColor="error"
            size='lg' 
            src="/IMAGES/linkedin-logo.png"
            zoomed
            squared
            bordered
            pointer
          />
        </a>
        </Grid>
        <Grid>
        <a href="https://github.com/jackmais" target="_blank">
          <Avatar text="github-avatar" 
            color="primary" 
            textColor="error"
            size='lg' 
            src="/IMAGES/github-logo.png"
            zoomed
            squared
            bordered
            pointer
          />
        </a>
        </Grid>
        <Grid>
        <Avatar text="pdf-avatar" 
            color="primary" 
            textColor="error"
            size='lg' 
            src="/IMAGES/pdf-logo.png"
            zoomed
            squared
            bordered
            pointer
            onClick={handler}
          />
        </Grid>
        <Grid>
          <Avatar text="Mail-avatar" 
            color="primary" 
            textColor="error"
            size='lg' 
            src="/IMAGES/gmail-logo.png"
            zoomed
            squared
            bordered
            pointer
            onClick={() => {
              window.location.href = 'mailto:jackmaistros@gmail.com';
            }}
            onHover
          />
        </Grid>
        <Modal
          closeButton
          aria-labelledby="modal-title"
          open={visible}
          onClose={closeHandler}
          blur
        >
          <Modal.Header>
            <Text id="modal-title" size={18}>
                Would you like to download a PDF of my Resume?
            </Text>
          </Modal.Header>
          <Modal.Body>
          <Button onPress={closeHandler} style={{ marginBottom: '4px' }}>
            Yes
          </Button>
          <Button flat color="error" onPress={closeHandler} style={{ marginTop: '4px', padding: '0' }}>
            No
          </Button>
            
          </Modal.Body>
        </Modal>
      </Grid.Container>

      <Text style={{ color: 'white', fontSize: '48px', textAlign: 'center' }}>
        Jack Maistros
      </Text>
      <Grid.Container gap = {2}>
      <Grid md = {8}>
        <Card1 />
      </Grid>
      <Grid md = {4}>
        <Card11 />
      </Grid>
      </Grid.Container>
      </main>
    </>
  )
}
