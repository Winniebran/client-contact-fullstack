import { z } from "zod";
import {
  contactResponseSerializer,
  createContactSerializer,
  updateContactSerializer,
} from "../serializers/contacts.serializer";

type IContactRequest = z.infer<typeof createContactSerializer>;
type IContactResponse = z.infer<typeof contactResponseSerializer>;
type IContactUpdate = z.infer<typeof updateContactSerializer>;

export { IContactRequest, IContactResponse, IContactUpdate };