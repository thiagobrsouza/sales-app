import { Button, Card } from "react-bootstrap";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Link from "next/link";

export function ProductList() {
  return (
    <Card border="">
      <Card.Body>
        <Card.Title className="text-center">Lista de Produtos</Card.Title>

        <Link href="/products/add">
          <Button variant="success" className="mb-3">Novo Produto</Button>
        </Link>

        <DataTable emptyMessage="Nenhum item encontrado" rowHover responsiveLayout="scroll">
          <Column header="Nome" />
          <Column header="Fabricante" />
          <Column header="Status" />
          <Column header="Tipo" />
          <Column header="PartNumber" />
          <Column header="Ações" />
        </DataTable>

      </Card.Body>
    </Card>
  )
}