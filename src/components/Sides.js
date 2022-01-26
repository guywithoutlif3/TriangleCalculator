import { useState, useEffect } from "react";
import {
  Form,
  Container,
  Row,
  Col,
  Alert,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import { If, Then, Else, When, Unless, Switch, Case, Default } from "react-if";

export default function Winkel() {
  const [calcType1, setCalcType1] = useState(0.0);
  const [sideA, setSideA] = useState(0.0);
  const [sideB, setSideB] = useState(0.0);
  const [sideC, setSideC] = useState(0.0);
  const [angleA, setAngleA] = useState(0.0);
  const [angleB, setAngleB] = useState(0.0);
  const [angleC, setAngleC] = useState(0.0);
  const [solution, setSolution] = useState(0.0);
  const [error1, setError1] = useState("");
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("storage"))
  );

  useEffect(() => {
    localStorage.setItem("storage", JSON.stringify(items));
  }, [items]);
  useEffect(() => {
    solutionInsertLocalStorage();
  }, [solution]);
  const solutionInsertLocalStorage = () => {
    setItems([
      ...items,
      {
        solution: solution,
        calcType: calcType1,
        sideA: null,
        sideB: null,
        sideC: null,
        angleA: angleA,
        angleB: angleB,
        angleC: angleC,
        error: error1,
      },
    ]);
  };
  function toRadians(angle) {
    return angle * (Math.PI / 180);
  }
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={5}>
            <div class="alert alert-danger" role="alert">
              Sides ist eine Work in Progress NUR Lösung mus hier beachtet werden!!!!
            </div>
            <Form.Select
              onChange={(e) => {
                console.log("e.target.value", e.target.value);
                setCalcType1(e.target.value);
              }}
              onFocus={(e) => {
                e.target.value = "0";
              }}
            >
              <option value="0">Welche Seite wollen Sie Berechnen</option>
              <option value="Side a from A, B, b">Side a from A, B, b</option>
              <option value="Side a from A, C, c">Side a from A, C, c</option>
              <option value="Side b from B, A, a">Side b from B, A, a</option>
              <option value="Side b from B, C, c">Side b from B, C, c</option>
              <option value="Side c from C, A, a">Side c from C, A, a</option>
              <option value="Side c from C, B, b">Side c from C, B, b</option>
            </Form.Select>
          </Col>
        </Row>
      </Container>

      {/* Condition for rendering selected Calculation Method for which Side */}
      <Switch>
        {/*  Side a from A, B, b*/}
        <Case condition={calcType1 === "Side a from A, B, b"}>
          <Container>
            <Row className="justify-content-md-center">
              <Col xs={5}>
                <InputGroup className="mb-3">
                  <FormControl
                    class={"input"}
                    onChange={(e) => {
                      setAngleA(parseFloat(e.target.value));
                    }}
                    placeholder="Winkel α"
                    onFocus={(e) => {
                      e.target.value = "";
                    }}
                  />
                  <InputGroup.Text className="input" placeholder="Winkel α">
                    °
                  </InputGroup.Text>
                </InputGroup>
                <InputGroup className="mb-3">
                  <FormControl
                    class={"input"}
                    onChange={(e) => {
                      setAngleB(parseFloat(e.target.value));
                    }}
                    placeholder="Winkel β"
                    onFocus={(e) => {
                      e.target.value = "";
                    }}
                  />
                  <InputGroup.Text className="input" placeholder="Winkel β">
                    °
                  </InputGroup.Text>
                </InputGroup>
                <InputGroup className="mb-3">
                  <FormControl
                    class={"input"}
                    onChange={(e) => setSideB(parseFloat(e.target.value))}
                    placeholder="Seite β"
                    onFocus={(e) => {
                      e.target.value = "";
                    }}
                  />
                  <InputGroup.Text className="input" placeholder="Seite β">
                    cm
                  </InputGroup.Text>
                </InputGroup>
                <Row className="justify-content-md-center">
                  <Button
                    onClick={() => {
                      let result =
                      (((toRadians(sideB) * Math.sin(toRadians(angleA))) /
                        Math.sin(toRadians(angleB))) *
                        180) /
                      Math.PI;
                      setSideA(result);
                      setSolution(result);
                      window.location.reload(false);
                    }}
                    variant="primary"
                  >
                    Berechnen!
                  </Button>
                </Row>
              </Col>
            </Row>
          </Container>
        </Case>

        {/*  Side a from A, C, c*/}
        <Case condition={calcType1 === "Side a from A, C, c"}>
          <Container>
            <Row className="justify-content-md-center">
              <Col xs={5}>
                <InputGroup className="mb-3">
                  <FormControl
                    class={"input"}
                    onChange={(e) => {
                      setAngleA(parseFloat(e.target.value));
                    }}
                    placeholder="Winkel α"
                    onFocus={(e) => {
                      e.target.value = "";
                    }}
                  />
                  <InputGroup.Text className="input" placeholder="Winkel α">
                    °
                  </InputGroup.Text>
                </InputGroup>
                <InputGroup className="mb-3">
                  <FormControl
                    class={"input"}
                    onChange={(e) => {
                      setAngleC(parseFloat(e.target.value));
                    }}
                    placeholder="Winkel γ"
                    onFocus={(e) => {
                      e.target.value = "";
                    }}
                  />
                  <InputGroup.Text className="input" placeholder="Winkel β">
                    °
                  </InputGroup.Text>
                </InputGroup>
                <InputGroup className="mb-3">
                  <FormControl
                    class={"input"}
                    onChange={(e) => setSideC(parseFloat(e.target.value))}
                    placeholder="Seite γ"
                    onFocus={(e) => {
                      e.target.value = "";
                    }}
                  />
                  <InputGroup.Text className="input" placeholder="Seite β">
                    cm
                  </InputGroup.Text>
                </InputGroup>
                <Row className="justify-content-md-center">
                  <Button
                    onClick={() => {
                      let result =
                      (((toRadians(sideC) * Math.sin(toRadians(angleA))) /
                        Math.sin(toRadians(angleC))) *
                        180) /
                      Math.PI;
                      setSideA(result);
                      setSolution(result);
                      window.location.reload(false);
                    }}
                    variant="primary"
                  >
                    Berechnen!
                  </Button>
                </Row>
              </Col>
            </Row>
          </Container>
        </Case>

        {/*  Side b from B, A, a */}
        <Case condition={calcType1 === "Side b from B, A, a"}>
          <Container>
            <Row className="justify-content-md-center">
              <Col xs={5}>
                <InputGroup className="mb-3">
                  <FormControl
                    class={"input"}
                    onChange={(e) => {
                      setAngleB(parseFloat(e.target.value));
                    }}
                    placeholder="Winkel β"
                    onFocus={(e) => {
                      e.target.value = "";
                    }}
                  />
                  <InputGroup.Text className="input" placeholder="Winkel β">
                    °
                  </InputGroup.Text>
                </InputGroup>
                <InputGroup className="mb-3">
                  <FormControl
                    class={"input"}
                    onChange={(e) => {
                      setAngleA(parseFloat(e.target.value));
                    }}
                    placeholder="Winkel α"
                    onFocus={(e) => {
                      e.target.value = "";
                    }}
                  />
                  <InputGroup.Text className="input" placeholder="Winkel β">
                    °
                  </InputGroup.Text>
                </InputGroup>
                <InputGroup className="mb-3">
                  <FormControl
                    class={"input"}
                    onChange={(e) => setSideA(parseFloat(e.target.value))}
                    placeholder="Seite α"
                    onFocus={(e) => {
                      e.target.value = "";
                    }}
                  />
                  <InputGroup.Text className="input" placeholder="Seite β">
                    cm
                  </InputGroup.Text>
                </InputGroup>
                <Row className="justify-content-md-center">
                  <Button
                    onClick={() => {
                      let result =
                      (((toRadians(sideA) * Math.sin(toRadians(angleB))) /
                        Math.sin(toRadians(angleA))) *
                        180) /
                      Math.PI;
                      setSideB(result);
                      setSolution(result);
                      window.location.reload(false);
                    }}
                    variant="primary"
                  >
                    Berechnen!
                  </Button>
                </Row>
              </Col>
            </Row>
          </Container>
        </Case>

        {/*  Side b from B, C, c */}
        <Case condition={calcType1 === "Side b from B, C, c"}>
          <Container>
            <Row className="justify-content-md-center">
              <Col xs={5}>
                <InputGroup className="mb-3">
                  <FormControl
                    class={"input"}
                    onChange={(e) => {
                      setAngleB(parseFloat(e.target.value));
                    }}
                    placeholder="Seite β"
                    onFocus={(e) => {
                      e.target.value = "";
                    }}
                  />
                  <InputGroup.Text className="input" placeholder="Winkel β">
                    cm
                  </InputGroup.Text>
                </InputGroup>
                <InputGroup className="mb-3">
                  <FormControl
                    class={"input"}
                    onChange={(e) => {
                      setAngleC(parseFloat(e.target.value));
                    }}
                    placeholder="Winkel γ"
                    onFocus={(e) => {
                      e.target.value = "";
                    }}
                  />
                  <InputGroup.Text className="input" placeholder="Winkel β">
                    °
                  </InputGroup.Text>
                </InputGroup>
                <InputGroup className="mb-3">
                  <FormControl
                    class={"input"}
                    onChange={(e) => setSideC(parseFloat(e.target.value))}
                    placeholder="Seite γ"
                    onFocus={(e) => {
                      e.target.value = "";
                    }}
                  />
                  <InputGroup.Text className="input" placeholder="Seite β">
                    cm
                  </InputGroup.Text>
                </InputGroup>
                <Row className="justify-content-md-center">
                  <Button
                    onClick={() => {
                      let result =
                        (((toRadians(sideC) * Math.sin(toRadians(angleB))) /
                          Math.sin(toRadians(angleC))) *
                          180) /
                        Math.PI;
                      setSideB(result);
                      setSolution(result);
                      window.location.reload(false);
                    }}
                    variant="primary"
                  >
                    Berechnen!
                  </Button>
                </Row>
              </Col>
            </Row>
          </Container>
        </Case>

        {/*  Side c from C, A, a */}
        <Case condition={calcType1 === "Side c from C, A, a"}>
          <Container>
            <Row className="justify-content-md-center">
              <Col xs={5}>
                <InputGroup className="mb-3">
                  <FormControl
                    class={"input"}
                    onChange={(e) => {
                      setAngleC(parseFloat(e.target.value));
                    }}
                    placeholder="Winkel γ"
                    onFocus={(e) => {
                      e.target.value = "";
                    }}
                  />
                  <InputGroup.Text className="input" placeholder="Winkel C">
                    °
                  </InputGroup.Text>
                </InputGroup>
                <InputGroup className="mb-3">
                  <FormControl
                    class={"input"}
                    onChange={(e) => {
                      setAngleA(parseFloat(e.target.value));
                    }}
                    placeholder="Winkel α"
                    onFocus={(e) => {
                      e.target.value = "";
                    }}
                  />
                  <InputGroup.Text className="input" placeholder="Winkel β">
                    °
                  </InputGroup.Text>
                </InputGroup>
                <InputGroup className="mb-3">
                  <FormControl
                    class={"input"}
                    onChange={(e) => setSideA(parseFloat(e.target.value))}
                    placeholder="Seite α"
                    onFocus={(e) => {
                      e.target.value = "";
                    }}
                  />
                  <InputGroup.Text className="input" placeholder="Seite β">
                    cm
                  </InputGroup.Text>
                </InputGroup>
                <Row className="justify-content-md-center">
                  <Button
                    onClick={() => {
                      let result =
                        (((toRadians(sideA) * Math.sin(toRadians(angleC))) /
                          Math.sin(toRadians(angleA))) *
                          180) /
                        Math.PI;
                      setSideC(result);
                      setSolution(result);
                      window.location.reload(false);
                    }}
                    variant="primary"
                  >
                    Berechnen!
                  </Button>
                </Row>
              </Col>
            </Row>
          </Container>
        </Case>

        {/*  Side c from C, B, b */}
        <Case condition={calcType1 === "Side c from C, B, b"}>
          <Container>
            <Row className="justify-content-md-center">
              <Col xs={5}>
                <InputGroup className="mb-3">
                  <FormControl
                    class={"input"}
                    onChange={(e) => {
                      setAngleC(parseFloat(e.target.value));
                    }}
                    placeholder="Winkel γ"
                    onFocus={(e) => {
                      e.target.value = "";
                    }}
                  />
                  <InputGroup.Text className="input" placeholder="Winkel C">
                    °
                  </InputGroup.Text>
                </InputGroup>
                <InputGroup className="mb-3">
                  <FormControl
                    class={"input"}
                    onChange={(e) => {
                      setAngleB(parseFloat(e.target.value));
                    }}
                    placeholder="Winkel β"
                    onFocus={(e) => {
                      e.target.value = "";
                    }}
                  />
                  <InputGroup.Text className="input" placeholder="Winkel β">
                    °
                  </InputGroup.Text>
                </InputGroup>
                <InputGroup className="mb-3">
                  <FormControl
                    class={"input"}
                    onChange={(e) => setSideB(parseFloat(e.target.value))}
                    placeholder="Seite β"
                    onFocus={(e) => {
                      e.target.value = "";
                    }}
                  />
                  <InputGroup.Text className="input" placeholder="Seite β">
                    cm
                  </InputGroup.Text>
                </InputGroup>
                <Row className="justify-content-md-center">
                  <Button
                    onClick={() => {
                      let result =
                        (((toRadians(sideB) * Math.sin(toRadians(angleC))) /
                          Math.sin(toRadians(angleB))) *
                          180) /
                        Math.PI;
                      setSideC(result);
                      setSolution(result);
                      window.location.reload(false);
                    }}
                    variant="primary"
                  >
                    Berechnen!
                  </Button>
                </Row>
              </Col>
            </Row>
          </Container>
        </Case>

        {/* Condtion for Default value */}
        <Default>
          <Container>
            <Row className="justify-content-md-center">
              <Col xs={5}>
                <Alert variant={"primary"}>
                  Bitte wählen Sie eine Seite zum Ausrechnen!
                </Alert>
              </Col>
            </Row>
          </Container>
        </Default>
      </Switch>
      <If condition={error1 != ""}>
        <Then>
          <Container>
            <Row className="justify-content-md-center">
              <Col xs={5}>
                <Alert variant={"danger"}>{error1}</Alert>
              </Col>
            </Row>
          </Container>
        </Then>
      </If>
    </div>
  );
}
