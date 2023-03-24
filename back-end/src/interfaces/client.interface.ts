import { z } from "zod";
import {
  clientResponseSerializer,
  createClientSerializer,
  updateClientSerializer,
} from "../serializers/client.serializer";
import { createLoginSerializer } from "../serializers/login.serializer";

type IClientRequest = z.infer<typeof createClientSerializer>;
type IClientResponse = z.infer<typeof clientResponseSerializer>;
type IClientUpdate = z.infer<typeof updateClientSerializer>;
type IClientLogin = z.infer<typeof createLoginSerializer>;

export { IClientRequest, IClientResponse, IClientUpdate, IClientLogin };
