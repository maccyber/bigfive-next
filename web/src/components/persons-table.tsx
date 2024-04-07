'use client'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/table";
import { DeleteIcon, EditIcon, PersonIcon, ResultIcon } from "@/components/icons";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import React, { useState } from "react";
import { validId } from "@/lib/helpers";

interface CompareProps {
  addPersonText: string;
  comparePeopleText: string;
}

export const ComparePeople: React.FC<CompareProps> = ({ addPersonText, comparePeopleText }) => {
  const columns = [
    {
      key: "name",
      label: "NAME",
    },
    {
      key: "id",
      label: "ID",
    },
    {
      key: "actions",
      label: "ACTIONS",
    },
  ];

  type Row = {
    id: string;
    name: string;
  }
  const [rows, setRows] = useState([] as Row[])
  const [name, setName] = useState('' as string);
  const [id, setId] = useState('' as string);

  const isInvalidId = React.useMemo(() => {
    if (id === "") return false;

    if (rows.some((item) => item.id === id)) return true;

    return !validId(id);
  }, [id]);

  function deleteItem(id: string) {
    setRows((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  }

  function addPerson() {
    const isDuplicate = rows.some((item) => item.id === id);
    if (name && validId(id) && !isDuplicate) {
      setRows((prev) => {
        return [...prev, { id, name }];
      })
      setName('');
      setId('');
    }
  }

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 items-start">
        <Input
          type="text"
          label="Name"
          labelPlacement="outside"
          placeholder="Arthur Dent"
          startContent={<PersonIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
          value={name}
          onValueChange={setName}
        />
        <Input
          type="text"
          label="ID"
          labelPlacement="outside"
          placeholder="58a70606a835c400c8b38e84"
          startContent={<ResultIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
          value={id}
          onValueChange={setId}
          isInvalid={isInvalidId}
          errorMessage={isInvalidId && "Please enter a valid ID and not a duplicate."}
        />
        <div className="flex-grow h-16 place-content-end">
          <Button
            color="primary"
            className="flex-shrink-0"
            onClick={addPerson}
            isDisabled={!name || !id || isInvalidId}
          >
            {addPersonText}
          </Button>
        </div>
      </div>
      <div>
        <Table
          hideHeader
          aria-label="List of persons to compare"
          isStriped
        >
          <TableHeader columns={columns}>
            {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
          </TableHeader>
          <TableBody items={rows} emptyContent="No rows to display.">
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) =>
                  columnKey === 'actions' ?
                    <TableCell className="flex justify-end">
                      <Button isIconOnly variant="light" aria-label="Edit">
                        <EditIcon />
                      </Button>
                      <Button isIconOnly variant="light" aria-label="Delete" onClick={() => deleteItem(item.id)}>
                        <DeleteIcon />
                      </Button>
                    </TableCell>
                    :
                    <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                }
              </TableRow>
            )}
          </TableBody>
        </Table>
        <Button
          color="primary"
          className="mt-4"
          isDisabled={rows.length < 2}
        >
          {comparePeopleText}
        </Button>
      </div>
    </div>
  );
}
