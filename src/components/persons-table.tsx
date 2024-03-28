'use client'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/table";

export function PersonsTable() {
  return (
    <Table hideHeader aria-label="List of persons to compare">
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>ID</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>Arthur Dent</TableCell>
          <TableCell>58a70606a835c400c8b38e84</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
