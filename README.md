# React Encryption App

A simple React Native app that demonstrates XOR encryption and decryption techniques. The app allows users to input plaintext, encrypt it with a dynamically generated key, and then decrypt it back to the original text.

## Features

- Encrypt and decrypt text using XOR encryption.
- Generates a unique encryption key based on the current date, time, and operating system.
- Simple UI for testing encryption and decryption functionality.

## Installation

### Prerequisites
Make sure you have the following installed:
- Node.js
- npm or yarn
- Expo CLI

### Setup
1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/react-encryption-app.git
   ```


# Encryption & Decryption

The encryption and decryption in this app use the XOR (exclusive or) operation. XOR is a binary operator, and in this case, it operates on the characters of the plaintext and the secret key to encrypt and decrypt the text.

## XOR Encryption

The XOR encryption works by applying the XOR operation between each character of the plaintext and the corresponding character of the secret key. The XOR operation is defined as:

### 𝐶 = 𝑃 ⊕ 𝐾

Where:
- **𝐶** is the encrypted character (ciphertext),
- **𝑃** is the plaintext character,
- **𝐾** is the key character.

The XOR operation produces a bitwise comparison of two bits. If the bits are the same, the result is 0; if they are different, the result is 1.

For each character in the plaintext, the corresponding character in the secret key is applied to generate the ciphertext.

## XOR Decryption

To decrypt the ciphertext, we apply the XOR operation again using the same secret key:

### 𝑃 = 𝐶 ⊕ 𝐾

Since XOR is a reversible operation, applying XOR twice with the same key will return the original plaintext.

## Functions

- **xorEncrypt**: This function takes the plaintext and a secret key, and applies XOR encryption to each character.  
  **Input**: plaintext (string), secretKey (string).  
  **Output**: encryptedText (string).

- **xorDecrypt**: This function decrypts the encrypted text by applying the XOR operation again using the same key.  
  **Input**: encryptedText (string), secretKey (string).  
  **Output**: decryptedText (string).

- **generateKey**: Generates a unique key based on the current date, time, and OS name.  
  **Input**: None.  
  **Output**: secretKey (string).

## Example

### Encryption:
Given the following:

- Plaintext: "Hello"
- Secret Key: "2025-iOS-2025-02-02T14:00:00.000Z"

Using the XOR operation:

#### 𝐶 = 𝑃 ⊕ 𝐾

The characters "H", "e", "l", "l", "o" are XOR'd with the characters from the secret key, resulting in encrypted text.

### Decryption:
To decrypt the ciphertext:


The same XOR operation is applied again, retrieving the original plaintext.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
