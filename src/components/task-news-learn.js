import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TaskTable } from "./task-table";
//import { Calender } from "./calender";

export function TaskNewsLearn() {
  return (
    <>
        <Container fluid>
            <Row>
                <Col sm={4} id="task-caleder" className="border-end border-dark">
                    <Row>
                        <Col className="bg-subhead"><h4 className="pt-2 text-white">TODAY'S TASKS</h4></Col>
                    </Row>
                    <Row className="h-25 overflow-auto">
                        <TaskTable />
                    </Row>
                    <Row>
                        <Col className="bg-subhead"><h4 className="pt-2 text-white">CALANDER</h4></Col>
                    </Row>
                    <Row className="h-50 overflow-auto">
                        <TaskTable />{/*Add calender here*/}
                    </Row>
                </Col>
                <Col sm={5} id="news" className="border-end border-dark">
                    <Row>
                        <Col className="bg-subhead"><h4 className="pt-2 text-white">NEWS AND SOCIAL MEDIA</h4></Col>
                    </Row>
                </Col>
                <Col sm={3}id="learning" className="border-end border-dark">
                    <Row>
                        <Col className="bg-subhead"><h4 className="pt-2 text-white">LEARNING MODULES</h4></Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </>
  );
}