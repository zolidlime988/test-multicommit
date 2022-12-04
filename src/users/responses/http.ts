export class ResponseStatus {

   private status: number;
   private message: string;
   private data: any;

   SuccessWithData(data: any) {
      this.status = 200;
      this.message = "OK";
      this.data = data;
      return this;
   }

   Success() {
      this.status = 200;
      this.message = "OK";
      return this;
   }

   BadRequest() {
      this.status = 400;
      this.message = "Bad Request";
      return this;
   }

   NotFound() {
      this.status = 404;
      this.message = "Not Found";
      return this;
   }

   Unauthorized() {
      this.status = 401;
      this.message = "Unauthorized";
      return this;
   }

   InternalServerError() {
      this.status = 500;
      this.message = "Internal Server Error";
      return this;
   }

   CustomError(status: number, message: string) {
      this.status = status;
      this.message = message;
      return this;
   }

}

export class ResponseType {
   static SuccessWithData(data: any) { return new ResponseStatus().SuccessWithData(data) }
   static Success() { return new ResponseStatus().Success() }
   static BadRequest() { return new ResponseStatus().BadRequest() }
   static NotFound() { return new ResponseStatus().NotFound() }
   static Unauthorized() { return new ResponseStatus().Unauthorized() }
   static InternalServerError() { return new ResponseStatus().InternalServerError() }
   static CustomError(status: number, message: string) { return new ResponseStatus().CustomError(status, message) }
}