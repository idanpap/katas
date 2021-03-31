QUEUE(F, LAST, y) {
    if (LAST < M){
        LAST <- LAST + 1
    } else { // LAST == M
        P <- getNode();
        R.Link <- P
        R <- P
        LAST <- 1
    }
    R.ITEM[LAST] <- y
}

UNQUEUE(F,FIRST){
    if (F == nil) {
        UNDEFLOW()
    }
    Result <- F.ITEM[FIRST]
    if(FIRST < M){
        FIRST <- FIRST - 1
    } else { // FIRST == M
        P <- F
        F <- P.Link
        Release(P)
        FIRST <- 1
    }
    return Result
}
