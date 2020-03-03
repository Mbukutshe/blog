USE BlogAppDB
GO

CREATE PROCEDURE AddPostGetID
		@UserID int,
		@SourcePostID int = null,
		@Order varchar = null
AS

INSERT INTO Posts (UserID, SourcePostID, PostDataOrder) VALUES (@UserID, @SourcePostID, @Order)
SELECT CAST(scope_identity() AS int);

GO