import { z } from "zod";
import {
  createTypeSerializer,
  typeResponseSerializer,
  updateTypeSerializer,
} from "../serializers/type.serializer";

type ITypeRequest = z.infer<typeof createTypeSerializer>;
type ITypeResponse = z.infer<typeof typeResponseSerializer>;
type ITypeUpdate = z.infer<typeof updateTypeSerializer>;

export { ITypeRequest, ITypeResponse, ITypeUpdate };
