import { TicketTypeDto } from "./ticket-type.dto";
import { UserDto } from "../user/user.dto";
import { AuditDto } from "../common/audit.dto";
import { ActivityDto } from "../activity/activity.dto";

export class CreateTicketDto {
    name: string;
    description: string;
    type: TicketTypeDto;
    responsible: UserDto;
    audit: AuditDto;
    activities: ActivityDto;

}