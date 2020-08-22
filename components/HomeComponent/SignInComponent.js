// import React from 'react';
// import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
// import { Link } from 'react-router-dom';

// function SignIn(props) {
//     return (
//         <div>
//             <Container className="py-4 mb-5">
//                 <Row className="my-4">
//                     <Col>
//                         <h2>Sign In</h2>
//                     </Col>
//                 </Row>
//                 <Row>
//                     <Col className="mx-auto" xs={7}>
//                         <Form>
//                             <FormGroup row>
//                                 <Label for="loginEmail" sm={3}>Email</Label>
//                                 <Col sm={9}>
//                                     <Input type="email" name="email" id="loginEmail" />
//                                 </Col>
//                             </FormGroup>
//                             <FormGroup row>
//                                 <Label for="inputPassword" sm={3}>Password</Label>
//                                 <Col sm={9}>
//                                     <Input type="password" name="password" id="inputPassword" autoComplete="on"/>
//                                 </Col>
//                             </FormGroup>
//                         </Form>
//                     </Col>
//                 </Row>
//                 <Row>
//                     <Col>
//                         <Button color="primary" className="blue-button">
//                             <Link to={'/pairing'} style={{ color: 'white' }}>
//                                 Submit
//                             </Link>
//                         </Button>
//                     </Col>
//                 </Row>
//             </Container>
//         </div>
//     );
// }

// export default SignIn;