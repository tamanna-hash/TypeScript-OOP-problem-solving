# TypeScript: Pick and Omit

## Introduction

As TypeScript projects grow, code duplication and poor structure can become a problem. Two important concepts that help solve this are utility types (`Pick`, `Omit`) and Object-Oriented Programming (OOP) principles.

This document explains both in a simple and practical way with examples.

---

# Pick and Omit Utility Types

## Base Interface Example

```ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
}
```

---

## Pick

`Pick` allows you to create a new type by selecting only specific properties from an existing type.

```ts
type PublicUser = Pick<User, "id" | "name" | "email">;
```

### Use case:

* Show limited user data
* Hide sensitive fields

---

## Omit

`Omit` allows you to create a new type by removing specific properties.

```ts
type SafeUser = Omit<User, "password" | "isAdmin">;
```

### Use case:

* Remove sensitive information
* Create API-safe responses

---

## Why Pick and Omit Matter

* Prevents rewriting types
* Keeps code DRY (Don’t Repeat Yourself)
* Reduces bugs when base interface changes


## Conclusion

### Pick and Omit

`Pick` and `Omit` are simple but powerful tools in TypeScript. They help you reuse existing types instead of rewriting them again and again. This keeps your codebase clean and consistent.

* `Pick` is useful when you only need specific fields from a large type.
* `Omit` is useful when you want to remove sensitive or unnecessary fields.

Together, they help follow the DRY (Don’t Repeat Yourself) principle and make your types easier to manage as your project grows.
