import { UserModel } from "./user.model";
import { AuditModel } from "./audit.model";
import { ActivityModel } from "./activity.model";
import { TicketTypeModel } from "./ticket-type.model";
import { InventoryModel } from "./inventory.model";

export class TicketModel {
    id: string;
    name: string;
    description: string;
    type: TicketTypeModel;
    responsible: UserModel;
    audit: AuditModel;
    activities: ActivityModel[];
    inventories: InventoryModel[];
}