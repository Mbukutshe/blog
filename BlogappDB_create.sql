USE master
IF EXISTS(select * from sys.databases where name='BlogAppDB')
DROP DATABASE BlogAppDB

CREATE DATABASE BlogAppDB;
GO

USE BlogAppDB;
GO

CREATE TABLE [dbo].[Users](
	[UserID] [int] IDENTITY(1,1) NOT NULL,
	[Username] [varchar](120) NOT NULL,
	[Password] [varchar](130) NOT NULL,
	[Email] [varchar](50) NOT NULL

	CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED ([UserID] ASC),
	CONSTRAINT [AK_Username_Email_Unique] UNIQUE(Username, Email)
);
GO

CREATE TABLE [dbo].[Posts](
	[PostID] [int] IDENTITY(1,1) NOT NULL,
	[SourcePostID] [int] NULL,
	[UserID] [int] NOT NULL,
	[PostDataOrder] [varchar] (30) NULL,
	[PostDate] [date] DEFAULT getDate(),

	CONSTRAINT [PK_Posts] PRIMARY KEY CLUSTERED ([PostID] ASC),
	CONSTRAINT [FK_SourcePosts_Posts] FOREIGN KEY([SourcePostID])
		REFERENCES [dbo].[Posts] ([PostID]),
	CONSTRAINT [FK_Posts_Users] FOREIGN KEY([UserID])
		REFERENCES [dbo].[Users] ([UserID])
);
GO

CREATE TABLE [dbo].[Images](
	[ImageID] [int] IDENTITY(1,1) NOT NULL,
	[PostID] [int] NOT NULL,
	[Image] [varbinary](max) NOT NULL,

	CONSTRAINT [PK_Images] PRIMARY KEY CLUSTERED ([ImageID] ASC),
	CONSTRAINT [FK_Images_Posts] FOREIGN KEY([PostID])
		REFERENCES [dbo].[Posts] ([PostID])
);
GO

CREATE TABLE [dbo].[Text](
	[TextID] [int] IDENTITY(1,1) NOT NULL,
	[PostID] [int] NOT NULL,
	[Text] [varchar](500) NOT NULL,

	CONSTRAINT [PK_Text] PRIMARY KEY CLUSTERED ([TextID] ASC),
	CONSTRAINT [FK_Text_Posts] FOREIGN KEY([PostID])
		REFERENCES [dbo].[Posts] ([PostID])
);
GO