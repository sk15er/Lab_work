%% Basic matrix operations such as addition, multiplication, inverse, transpose,
%% determinant, submatrix, compatibility, elementwise multiplication etc.

% Author: Shushank
% Date: 2026-08-18

close all; clc;

%% Matrices
A = [1 2; 3 4];
B = [5 6; 7 8];

%% Basic Matrix Operations
addition_result       = A + B;
subtraction_result    = A - B;
multiplication_result = A * B;
elementwise_result    = A .* B;

inverse_A = inv(A);
inverse_B = inv(B);

transpose_A = A';
transpose_B = B';

determinant_A = det(A);
determinant_B = det(B);

rank_A = rank(A);
rank_B = rank(B);

submatrix_A = A(1:2,1);
[mA,nA] = size(A);
[mB,nB] = size(B);
is_compatible = (nA == mB);

%% Eigenvalues and Eigenvectors
[eigenvectors_A,eigenvalues_A] = eig(A);
[eigenvectors_B,eigenvalues_B] = eig(B);

eigenvalues_A = diag(eigenvalues_A);
eigenvalues_B = diag(eigenvalues_B);

%% Characteristic Polynomial and Equation
syms lambda

characteristic_polynomial_A = poly(A);
characteristic_polynomial_B = poly(B);

characteristic_equation_A = ...
    det(lambda*eye(size(A))-A) == 0;
characteristic_equation_B = ...
    det(lambda*eye(size(B))-B) == 0;

%% Cayley-Hamilton Theorem
cA = characteristic_polynomial_A;
cB = characteristic_polynomial_B;

cayley_hamilton_A = cA(1)*A^2 + cA(2)*A + cA(3)*eye(size(A));
cayley_hamilton_B = cB(1)*B^2 + cB(2)*B + cB(3)*eye(size(B));

verified_A = isequal(round(cayley_hamilton_A,10),zeros(size(A)));
verified_B = isequal(round(cayley_hamilton_B,10),zeros(size(B)));

%% System of Linear Equations
% x + 2y = 5
% 3x + 4y = 11

C = [5;11];
solution_X = A\C;
x = solution_X(1);
y = solution_X(2);
verification = A*solution_X;

%% Display Results
fprintf('\n========== MATRIX OPERATIONS ==========\n');

disp('A ='); disp(A);
disp('B ='); disp(B);

disp('A + B ='); disp(addition_result);
disp('A - B ='); disp(subtraction_result);
disp('A * B ='); disp(multiplication_result);
disp('A .* B ='); disp(elementwise_result);

disp('Inverse of A ='); disp(inverse_A);
disp('Inverse of B ='); disp(inverse_B);

disp('Transpose of A ='); disp(transpose_A);
disp('Transpose of B ='); disp(transpose_B);

fprintf('det(A) = %.2f\n',determinant_A);
fprintf('det(B) = %.2f\n',determinant_B);
fprintf('rank(A) = %d\n',rank_A);
fprintf('rank(B) = %d\n',rank_B);

disp('Submatrix of A ='); disp(submatrix_A);
fprintf('Size of A = %d x %d\n',mA,nA);
fprintf('Size of B = %d x %d\n',mB,nB);
fprintf('A and B compatible for multiplication: %d\n',is_compatible);

fprintf('\n========== EIGENVALUES / EIGENVECTORS ==========\n');

disp('Eigenvalues of A ='); disp(eigenvalues_A);
disp('Eigenvectors of A ='); disp(eigenvectors_A);
disp('Eigenvalues of B ='); disp(eigenvalues_B);
disp('Eigenvectors of B ='); disp(eigenvectors_B);

fprintf('\n========== CHARACTERISTIC POLYNOMIAL ==========\n');

disp('Coefficients for A ='); disp(characteristic_polynomial_A);
disp('Coefficients for B ='); disp(characteristic_polynomial_B);
disp('Characteristic equation of A ='); disp(characteristic_equation_A);
disp('Characteristic equation of B ='); disp(characteristic_equation_B);

fprintf('\n========== CAYLEY-HAMILTON THEOREM ==========\n');

disp('p(A) ='); disp(cayley_hamilton_A);
fprintf('Theorem verified for A: %d\n',verified_A);

disp('p(B) ='); disp(cayley_hamilton_B);
fprintf('Theorem verified for B: %d\n',verified_B);

fprintf('\n========== LINEAR EQUATIONS ==========\n');

disp('Coefficient matrix A ='); disp(A);
disp('Right-hand side C ='); disp(C);
disp('Solution [x;y] ='); disp(solution_X);
fprintf('x = %.2f, y = %.2f\n',x,y);
disp('Verification A*X ='); disp(verification);

%% Plotting
figure;
subplot(1,2,1);
plot(A,'LineWidth',2);
title('Matrix A'); xlabel('Column'); ylabel('Value'); grid on;

subplot(1,2,2);
plot(B,'LineWidth',2);
title('Matrix B'); xlabel('Column'); ylabel('Value'); grid on;

fprintf('\n========== PROGRAM COMPLETED ==========\n');
