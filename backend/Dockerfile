# Use an official Golang runtime as the base image
FROM golang:latest

# Set the working directory in the container
WORKDIR /app

# Copy the Go application code to the container
COPY . .

# Build the Go backend
RUN go build -o main .

# Use a smaller base image for the final image
FROM alpine:latest

# Copy the Go binary from the build container
COPY --from=build /app/main /app/main

# Expose port 8080
EXPOSE 8080

# Run the Go backend
CMD ["/app/main"]
