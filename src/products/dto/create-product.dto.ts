export class CreateProductDto {
  'id': string;
  'name': string;
  'url': string;
  'description': string;
  'attachments': string;
  'price': number;
  'minimum_order': number;
  'stock': number;
  'sku': string;
  'weight': number;
  'long': number;
  'wide': number;
  'height': number;
  'is_active': boolean;
  'variants': string;
  'size': number;
  // "storesId" : string
}
