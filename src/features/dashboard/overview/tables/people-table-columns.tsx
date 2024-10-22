import * as React from 'react';
import { type ColumnDef } from '@tanstack/react-table';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

import { DataTableColumnHeader } from '@/components/data-table';
import { EyeIcon } from 'lucide-react';
import { PersonType } from '@/services/person';

export function getColumns(): ColumnDef<PersonType>[] {
  return [
    {
      id: 'select',
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && 'indeterminate')
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label={'select-all'}
          className="translate-y-0.5"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label={'select-row'}
          className="translate-y-0.5"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: 'id',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title={'Id'} />
      ),
      cell: ({ cell }) => {
        const id = cell.getValue();
        if (!id) return 'N/A';

        return id;
      },
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: 'CNIMan',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="CNI (Homme)" />
      ),
      cell: ({ row }) => {
        return <span className=" font-medium">{row.original.CNIMan}</span>;
      },
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: 'CNIWoman',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="CNI (Femme)" />
      ),
      cell: ({ row }) => {
        return <span className=" font-medium">{row.original.CNIWoman}</span>;
      },
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: 'firstName',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title=" Prénom" />
      ),
      cell: ({ row }) => {
        return (
          <div className="flex space-x-2">
            <span className="max-w-[300px] truncate font-medium">
              {row.original.firstName}
            </span>
          </div>
        );
      },
    },
    {
      accessorKey: 'lastName',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Nom " />
      ),
      cell: ({ row }) => {
        return (
          <div className="flex space-x-2">
            <span className="max-w-[300px] truncate font-medium">
              {row.original.lastName}
            </span>
          </div>
        );
      },
    },

    {
      id: 'actions',
      cell: function Cell({ row }) {
        const [showPerson, setShowPerson] = React.useState(false);
        const [showEdite, setShowEdit] = React.useState(false);

        return (
          <>
            {/* <ChangeRoleDialog
              open={showAddNewAgencyDialog}
              onOpenChange={setShowAddNewAgencyDialog}
              userId={row.original._id}
              showTrigger={false}
            />
            <ChangeRoleAgentDialog
              open={showAddNewAgentDialog}
              onOpenChange={setShowAddNewAgentDialog}
              userId={row.original._id}
              showTrigger={false}
            /> */}
            {/* <DeleteContactsDialog
              open={showDeleteTaskDialog}
              onOpenChange={setShowDeleteTaskDialog}
              contacts={[row.original]}
              showTrigger={false}
              onSuccess={() => row.toggleSelected(false)}
            /> */}

            <Button
              aria-label="Open menu"
              variant="ghost"
              className="data-[state=open]:bg-muted flex size-8 p-0"
            >
              <EyeIcon className="size-4" aria-hidden="true" />
            </Button>
          </>
        );
      },
    },
  ];
}
