// import Article from 'grommet/components/Article';
// import Columns from 'grommet/components/Columns';
import Box from 'grommet/components/Box';
import Sidebar from 'grommet/components/Sidebar';
// import Section from 'grommet/components/Section';
import Hero from 'grommet/components/Hero';
// import Form from 'grommet/components/Form';
// import FormField from 'grommet/components/FormField';
// import LoginForm from 'grommet/components/LoginForm';
// import Select from 'grommet/components/Select';
// import RadioButton from 'grommet/components/RadioButton';
// import Button from 'grommet/components/Button';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
// import AnnotatedMeter from 'grommet-addons/components/AnnotatedMeter';
import App from 'grommet/components/App';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Image from 'grommet/components/Image';
import Heading from 'grommet/components/Heading';



import React, { Component } from "react";
// import API from "../../utils/API";

class Replate extends Component {
    
    state = {};


    render () {
        return (
            <App>
            <Hero background={<Image src='https://images.pexels.com/photos/349610/pexels-photo-349610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                fit='cover'
                full={true} />}
                backgroundColorIndex='dark'
                size="large">
                <Box direction='row'
                    justify='center'
                    align='center'>
                <Box basis='1/2'
                    align='end'
                    pad='medium' />
                <Box basis='1/2'
                    align='start'
                    pad='medium'>
                <Heading margin='none'>
                        Replate
                </Heading>
                </Box>
                </Box>
            </Hero>
            </App>
        );
    }

}

export default Replate;