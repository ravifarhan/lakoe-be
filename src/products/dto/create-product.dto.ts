export class CreateProductDto {
  'id': string;
  'name': string;
  'description': string;
  'attachments': string;
  'is_active': boolean;
  'minimum_order': number;
  'variants': string;
  'size': number;
  // "storesId" : string
}
