import React, { useState, useEffect } from "react";
import agent from "../../apiAgent";
import LoadingModal from "../../layout/LoadingModal";
import Nav from "../../layout/Nav";
import { Table, Button } from "semantic-ui-react";
import "./pages.styles.css";
import EditCompany from "../fixtures/EditCompany";
import { Company } from "../../models/Company";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Company[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [companyToEdit, setCompanyToEdit] = useState<Company | null>(null);
  const [count, setCount] = useState(0);

  const editClickHandler = (id: number) => {
    const selectedCompany = data?.find((d) => d.id === id);
    if (!selectedCompany) return;
    setCompanyToEdit(selectedCompany);
    setOpenModal(true);
  };

  const getAllCompanies = () => {
    try {
      agent.Company.list().then((data) => {
        setData(data);
        setLoading(false);
      });
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    if (count < 0) return;
    getAllCompanies();
  }, [count]);

  const deleteData = (id: number) => {
    setLoading(true);
    try {
      agent.Company.delete(id).then(() => {
        setLoading(false);
        getAllCompanies();
      });
    } catch (error) {
      throw error;
    }
  };

  return loading ? (
    <LoadingModal />
  ) : (
    <>
      <Nav />
      {openModal && (
        <EditCompany
          companyData={companyToEdit}
          open={openModal}
          setOpen={setOpenModal}
          header="Edit Company data"
          count={count}
          setCount={setCount}
        />
      )}
      <Table celled striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Exchange</Table.HeaderCell>
            <Table.HeaderCell>Ticker</Table.HeaderCell>
            <Table.HeaderCell>ISIN</Table.HeaderCell>
            <Table.HeaderCell>website</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.map((item: any) => (
            <Table.Row key={item.id}>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>{item.exchange}</Table.Cell>
              <Table.Cell>{item.ticker}</Table.Cell>
              <Table.Cell>{item.isin}</Table.Cell>
              <Table.Cell>{item.website}</Table.Cell>
              <Table.Cell
                className="eighty-width"
                onClick={(e: any) => editClickHandler(item.id)}
              >
                <Button primary size="tiny">
                  Edit
                </Button>
              </Table.Cell>
              <Table.Cell
                className="eighty-width"
                onClick={(e: any) => deleteData(item.id)}
              >
                <Button secondary size="tiny">
                  Delete
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  );
};
export default Home;
