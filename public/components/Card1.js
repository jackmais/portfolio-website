import { Card, Col, Row, Button, Text } from "@nextui-org/react";
const handleGithubClick = () => {
  window.open('https://github.com/mmaist/JaM', '_blank');
};

const handleVercelClick = () => {
  window.open('https://ja-kstw9r8de-mmaist.vercel.app/', '_blank');
};
export const Card1 = () => (
  <Card css={{ w: "100%", h: "800px" }}>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src="/IMAGES/ARB-SS.png"
        width="100%"
        height="100%"
        objectFit="cover"
        alt="Card example background"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#ffffff66",
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.4)",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Row justify="flex-end">
            <Button flat auto rounded color="success" onClick={handleGithubClick}>
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
                Github
              </Text>
            </Button>
            <Button flat auto rounded color="success" onClick={handleVercelClick}>
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
                Vercel Deployment
              </Text>
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);

export const Card11 = () => (
  <Card css={{ w: "100%", h: "300px" }}>
    <Card.Header>
            <Text style={{ color: 'black', fontSize: '48px', textAlign: 'center', fontFamily: "Arial" }}>
            About
            </Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body css={{ py: "$10" }}>
            <Text>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </Text>
          </Card.Body>
  </Card>
);
export const Card111 = () => (
  <Card css={{ w: "100%", h: "300px" }}>
    <Card.Header>
            <Text style={{ color: 'black', fontSize: '48px', textAlign: 'center', fontFamily: "Arial" }}>
            Tools Used
            </Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body css={{ py: "$10" }}>
            <Text>
              Jack Maistros
            </Text>
          </Card.Body>
  </Card>
);

