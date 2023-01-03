import { Button, Card, Form } from "react-bootstrap";
import { Input, SelectForm } from "../../common/Input";
import Link from "next/link";

export function ProductForm() {
  return (
    <Card>
      <Card.Body>
        <Card.Title className="text-center">Adicionar ou remover um produto</Card.Title>

        <Form>
          <Input label="Nome" id="name" />
          <Input label="PartNumber" id="partNumber" />
          <SelectForm label="Tipo">
            <option>Selecione o tipo</option>
          </SelectForm>
          <SelectForm label="Fabricante">
            <option>Selecione o fabricante</option>
          </SelectForm>
          <SelectForm label="Ativo">
            <option>Selecione o status</option>
          </SelectForm>

          <Button variant="primary" className="col-12 mb-3">Salvar</Button>
          <Link href="/products">
            <Button variant="info" className="col-12 mb-3">Ir para lista</Button>
          </Link>
        </Form>

      </Card.Body>
    </Card>
  )
}