import React from 'react';
import { Button, Alert, Icon, Flip, Avatar } from "core/component";

const { Group } = Button;
const { Item } = Flip;

const Test = () => {

	return (
		<div style={{ padding: '20px' }}>
			{/*<Button disabled>Default</Button>*/}
			{/*<Button outline color="primary">Default</Button>*/}
			{/*<Button link size="xs" color="pink" round>Primary Button</Button>*/}
			{/*<Button color="blue" round>Info Button</Button>*/}
			{/*<Button color="green">Success Button</Button>*/}
			{/*<Button disabled ripple size="sm" color="pink">Primary Button</Button>*/}
			{/*<Button ripple size="sm" color="yellow" round link dash>Primary Button</Button>*/}
			{/*<Button ripple size="sm" color="yellow" round outline dash>Primary Button</Button>*/}
			{/*<Button ripple color="pink" dash onClick={() => console.log('dasdasd')}>Primary*/}
				{/*Button</Button>*/}
			{/*<Button size="lg" color="pink" block round>Primary Button</Button>*/}
			{/*<Button color="pink" round outline>Primary Button</Button>*/}
			{/*<Button size="lg" color="pink" loading outline disabled>Primary Button</Button>*/}

			{/*<Group ripple>*/}
				{/*<Button>Left</Button>*/}
				{/*<Button dash>Middle</Button>*/}
				{/*<Button>Right</Button>*/}
			{/*</Group>*/}
			{/*<Group ripple color="primary" round>*/}
				{/*<Button>Left</Button>*/}
				{/*<Button>Middle</Button>*/}
				{/*<Button>Right</Button>*/}
			{/*</Group>*/}
			{/*<Group ripple color="blue" round>*/}
				{/*<Button>Left</Button>*/}
				{/*<Button>Middle</Button>*/}
				{/*<Button>Right</Button>*/}
			{/*</Group>*/}
			{/*<Group ripple color="green">*/}
				{/*<Button disabled>Left</Button>*/}
				{/*<Button>Right</Button>*/}
			{/*</Group>*/}

			{/*<Alert closable onClose={() => console.log('abc')}>alert</Alert>*/}
			{/*<Alert type="error" closeText="close now" afterClose={()=> console.log('done')}>alert</Alert>*/}
			{/*<Alert type="warning" closable>alert</Alert>*/}
			{/*<Alert type="success" closable>alert</Alert>*/}

			<Icon type="Info"/>

			{/*<Flip height={100} style={{width: 400}}>*/}
			{/*<Item style={{backgroundColor: '#f50'}}>*/}
			{/*<div>abc</div>*/}
			{/*</Item>*/}
			{/*<Item style={{backgroundColor: '#9a7'}}>*/}
			{/*<div>efg</div>*/}
			{/*</Item>*/}
			{/*</Flip>*/}


			<div>
				<Avatar size={40}>U</Avatar>
				<Avatar>Usa</Avatar>
				<Avatar size={60}>Uus343r</Avatar>
				<Avatar size={100}>Uus343r</Avatar>
				<Avatar shape="square"/>
				<Avatar icon="Info"/>
				<Avatar src="https://ysf.nosdn.127.net/ausunifcvhchdzbexjvxcswemqeojqdf"/>
				<Avatar style={{backgroundColor: '#f56a00'}} onClick={() => {console.log('abs')}}><Icon type="wallet" size={20}/></Avatar>
			</div>
		</div>
	);
};

export default Test;
