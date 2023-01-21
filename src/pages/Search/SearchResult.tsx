import { BsTrash } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import EditReceipt from "./EditReceipt";
import { IReceipt, useReceiptsContext } from "../../components/ReceiptsContext";
import { useState } from "react";
import { When } from "react-if";
import axios from "axios";

export default function SearchResult({ receipt }: { receipt: IReceipt }) {
  const { setReceipts, receipts } = useReceiptsContext();
  const [edit, setEdit] = useState(false);

  async function OpenDelete(): Promise<void> {
    await axios.delete(`http://localhost:3000/api/receipts/${receipt._id}`);
    setReceipts(receipts.filter((r) => r._id !== receipt._id));
  }

  return (
    <tr>
      <When condition={edit}>
        <EditReceipt receipt={receipt} onClose={() => setEdit(false)} />
      </When>
      <td>{receipt.product}</td>
      <td> {receipt.shop}</td>
      <td>{new Date(receipt.dateOfPurchase).toISOString().split("T")[0]}</td>
      <td>
        <AiOutlineEdit onClick={() => setEdit(!edit)} />
      </td>
      <td>
        <BsTrash onClick={() => OpenDelete()} />
      </td>
    </tr>
  );
}
