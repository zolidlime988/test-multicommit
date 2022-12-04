import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";

@ValidatorConstraint()
export class IsEmailOrNullConstraint implements ValidatorConstraintInterface {
   validate(email: string, validationArguments?: ValidationArguments): boolean {
      return (!!email && email === email.match(/^[A-Za-z0-9._+\-\']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$/g)?.join()) || !email
   }
}

/**
 * Checks if value is defined and have a value. If so, then, check if it is a valid email.
 */

export function IsOptionalEmail(validatorOptions?: ValidationOptions): PropertyDecorator {
   return function(object: Object, propertyName: string) {
      registerDecorator({
         target: object.constructor,
         propertyName: propertyName,
         options: { ...validatorOptions, message: '$value is not a valid email' },
         constraints: [],
         validator: IsEmailOrNullConstraint,
      })
   }
}