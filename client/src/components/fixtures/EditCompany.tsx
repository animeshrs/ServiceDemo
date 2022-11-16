import React, { useState } from "react";
import { Button, Input, Modal, Table } from "semantic-ui-react";
import agent from "../../apiAgent";
import { Company } from "../../models/Company";
import LoadingModal from "../../layout/LoadingModal";

interface EditCompanyProps {
  companyData: Company | null;
  open: boolean;
  setOpen: (openModal: boolean) => void;
  header?: string;
  count: number;
  setCount: (c: any) => void;
}

const EditCompany = ({
  companyData,
  open,
  setOpen,
  header,
  count,
  setCount,
}: EditCompanyProps) => {
  const [name, setName] = useState(companyData?.name);
  const [exchange, setExchange] = useState(companyData?.exchange);
  const [ticker, setTicker] = useState(companyData?.ticker);
  const [isin, setIsin] = useState(companyData?.isin);
  const [website, setWebsite] = useState(companyData?.website);
  const [loading, setLoading] = useState(false);

  const submitHandler = () => {
    setOpen(false);
    setLoading(true);
    try {
      const updatedData = {
        id: companyData?.id,
        name,
        exchange,
        ticker,
        isin,
        website,
      };
      agent.Company.update(updatedData).then(() => {
        setLoading(false);
        setCount(count + 1);
      });
    } catch (error) {
      throw error;
    }
  };

  return loading ? (
    <Modal open={loading}>
      <Modal.Content>
        <LoadingModal />
      </Modal.Content>
    </Modal>
  ) : (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
    >
      <Modal.Header>{header}</Modal.Header>

      <Modal.Content>
        <Table>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Name</Table.Cell>
              <Table.Cell>
                <Input
                  defaultValue={name}
                  onChange={(e: any) => setName(e.target.value)}
                />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Exchange</Table.Cell>
              <Table.Cell>
                <Input
                  defaultValue={exchange}
                  onChange={(e: any) => setExchange(e.target.value)}
                />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Ticker</Table.Cell>
              <Table.Cell>
                <Input
                  defaultValue={ticker}
                  onChange={(e: any) => setTicker(e.target.value)}
                />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>ISIN</Table.Cell>
              <Table.Cell>
                <Input
                  defaultValue={isin}
                  onChange={(e: any) => setIsin(e.target.value)}
                />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>website</Table.Cell>
              <Table.Cell>
                <Input
                  defaultValue={website}
                  onChange={(e: any) => setWebsite(e.target.value)}
                />
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button
          content="Submit"
          labelPosition="right"
          icon="checkmark"
          onClick={() => submitHandler()}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

export default EditCompany;
