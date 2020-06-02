import { ProductTypeModel } from "./product-type.model";
import { AuditModel } from "./audit.model";

export class ProductModel {
    id: string;
    name: string;
    type: ProductTypeModel;
    audit: AuditModel;
}