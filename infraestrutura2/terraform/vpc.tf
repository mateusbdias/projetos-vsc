resource "aws_default_vpc" "shared-vpc" {
    tags = {
        Name = "Default VPC"
    }
}

resource "aws_subnet" "subnet-mesa-4" {
    vpc_id = aws_default_vpc.shared-vpc.id
    cidr_block = "172.31.32.0/20"
    tags = {
        Name = "grupo-4-subnet"
    }
}